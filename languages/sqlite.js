const SQLITE_RULES = {
    "highlights": [
        {
            "regex": /\&/g,
            "replaceTo": "&amp;"
        },
        {
            "regex": /\</g,
            "replaceTo": "&lt;"
        },
        {
            "regex": /\>/g,
            "replaceTo": "&gt;"
        },
        {
            "regex": /\=/g,
            "replaceTo": "&equals;"
        },
        {   // Text between quotation marks
            "regex": /("(.*?)"|'(.*?)')/gm,
            "replaceTo": "<SPAN class='mini-code-editor-green-imp'>$&</SPAN>"
        },
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\-\-.*))/gm,
            "replaceTo": "<SPAN class='mini-code-editor-red-imp'>$&</SPAN>"
        },
        {  
            "regex": /\b(add|alter|autoincrement|create|column|drop|foreign|from|insert|into|key|not|primary|references|rename|select|table|to|values)\b/gmi,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(null|integer|real|text|blob)\b/gmi,
            "replaceTo": "<SPAN class='mini-code-editor-red'>$&</SPAN>"
        },
        {
            "regex": /\n$/g,
            "replaceTo": "\n\n"
        }
    ],
    "character_pairs": {
        "(": ")",
        "\"": "\"",
        "'": "'",
        "{": "}",
        "[": "]"
    },
    "backspace_pairs": ["\"\"", "''", "()", "{}", "[]"],
    "newline_pairs": ["()", "{}", "[]"],
    "shortcuts": [
        {
            "keyword": "cr",
            "left": "CREATE TABLE ",
            "right": "(\n\tID INTEGER PRIMARY KEY AUTOINCREMENT,\n\t\n)"
        },
        {
            "keyword": "ins",
            "left": "INSERT INTO ",
            "right": "() VALUES (\n\t\n) "
        },
        {
            "keyword": "sel",
            "left": "SELECT ",
            "right": " FROM "
        }
    ]
}
