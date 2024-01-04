# Zotero-S'n'R - Search and Replace for Zotero
Zotero was and still is in dire need of a simple search and replace function. Consequently, I decided to learn JavaScript and coded a basic solution.  
## What it does:
My script prompts you, "Which field should be searched?" ([full list of available fields and their names](https://api.zotero.org/itemFields?pprint=1)). Next, you need to provide the old and new string (2 further prompts). Then the script will start a search in your current library ($string1 contains $string2 in the given field; just as the 'Advanced Search' would do). After that, you will see how many items will be changed and a preview of the first item. Once you agree, the script will perform the operation and tell you how many items were changed.

## What you should do:
**Back up your local Zotero-library before using my script (or doing any batch-editing)!**
- [Guide by University of Ottawa Library](https://uottawa.libguides.com/how_to_use_zotero/back_up_and_restore)
- [Official Documentation](https://www.zotero.org/support/zotero_data)


## How to use it -- 1: "Run JavaScript"
The easiest way of running Zotero-S'n'R is to copy the code from '[src/basic_script.js](https://github.com/Schoeneh/zotero-s-n-r/releases/latest/download/basic_script.js)' into Tools --> Developer --> Run Javascript:

![Screenshot showing the menu and submenus: Tools, Developer, Run JavaScript](doc/screenshot_developer.png)

## How to use it -- 2: Plugin
--- in development ---
