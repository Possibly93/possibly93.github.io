import json
import os
import asyncio
import aiohttp
import random
from colorama import Fore, Style
WEBSITE = "https://example.com" # do not include the last slash
TAG = f"{Fore.BLUE}[JPATH]{Style.RESET_ALL} "
INPUT_COLOR = f"{Fore.YELLOW}"
USER_INPUT_COLOR = f"{Fore.WHITE}"
def get_script_name():
    return os.path.basename(__file__)
def set_cmd_title(title):
    if title:
        os.system(f'title "JPATH | {title}"')
async def download_file(session, url, filepath):
    if os.path.exists(filepath):
        print(TAG + f"{Fore.YELLOW}Skipping{Style.RESET_ALL} {os.path.basename(filepath)} as it already exists.")
        return
    try:
        async with session.get(url) as response:
            if response.status == 200:
                with open(filepath, 'wb') as f:
                    f.write(await response.read())
                    print(TAG + f"{Fore.GREEN}Downloaded{Style.RESET_ALL} {os.path.basename(filepath)} {Fore.GREEN}successfully{Style.RESET_ALL}")
            else:
                print(TAG + f"{Fore.RED}Failed{Style.RESET_ALL} to download {os.path.basename(filepath)} from {url}")
    except aiohttp.ClientError as e:
        print(TAG + f"{Fore.RED}Error:{Style.RESET_ALL}", e)
async def download_files_from_json(json_data, base_url, download_path, script_name):
    async with aiohttp.ClientSession() as session:
        try:
            tasks = []
            total_files = sum(len(files) for _, files in json_data.items())
            current_file = 0
            for directory, content in json_data.items():
                subdir_path = os.path.join(download_path, directory)
                os.makedirs(subdir_path, exist_ok=True)

                for item, value in content.items():
                    current_file += 1

                    set_cmd_title(f"{current_file}/{total_files} {item}")
                    print(TAG + f"{Fore.YELLOW}Downloading {Style.RESET_ALL}{Fore.BLUE}{item}{Style.RESET_ALL} from {Fore.CYAN}{base_url}/{directory}{Fore.CYAN}/{item}{Style.RESET_ALL} ( {current_file}/{total_files} )")
                    if isinstance(value, dict):
                        await download_files_from_json({item: value}, base_url + f'/{directory}', subdir_path, script_name)
                    else:
                        url = f"{base_url}/{directory}/{item}"
                        filepath = os.path.join(subdir_path, item)
                        tasks.append(download_file(session, url, filepath))

            await asyncio.gather(*tasks)
        finally:
            await session.close()
async def async_input(prompt):
    print(prompt, end='', flush=True)
    return (await asyncio.get_event_loop().run_in_executor(None, input))
async def main():
    script_name = get_script_name()
    default_cmd_title = "Downloader"
    set_cmd_title(default_cmd_title)
    print(f"{Fore.RED} Note: You have to set what website you would like the downloader to download from.")
    while True:
        set_cmd_title(default_cmd_title)

        json_input = await async_input(TAG + f"{Style.RESET_ALL}{INPUT_COLOR}Enter the JSON data (or type 'quit' to exit): {Style.RESET_ALL}")
        if json_input.lower() == 'quit':
            break

        # Generate a random number for the JSON folder
        json_folder = f"JPATH_{random.randint(1, 1000)}"

        download_path_input = await async_input(TAG + f"{Style.RESET_ALL}{INPUT_COLOR}Enter the download path ('d' for default): {Style.RESET_ALL}")

        if download_path_input.lower() == 'd':
            download_path = os.path.join(os.path.expanduser("~"), "AppData", "Local", "JPATH", json_folder)
        else:
            download_path = download_path_input

        try:
            json_data = json.loads(json_input)
        except json.JSONDecodeError as e:
            print(TAG + f"{Fore.RED}Invalid JSON format:{Style.RESET_ALL}", e)
            continue

        await download_files_from_json(json_data, WEBSITE, download_path, script_name)

        completion_message = f"{TAG}{Fore.GREEN}Downloaded all files to {Style.RESET_ALL}{USER_INPUT_COLOR}{download_path}{Style.RESET_ALL}{Fore.GREEN}!{Style.RESET_ALL}(remember this if you chose the default location!)"
        print(completion_message)

    set_cmd_title(default_cmd_title)
if __name__ == "__main__":
    asyncio.run(main())
