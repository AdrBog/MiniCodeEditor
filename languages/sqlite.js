const SQLITE_RULES = {
    "highlights": [
        {
            "regex": "&",
            "replaceTo": "&amp;"
        },
        {
            "regex": "<",
            "replaceTo": "&lt;"
        },
        {
            "regex": ">",
            "replaceTo": "&gt;"
        },
        {
            "regex": "=",
            "replaceTo": "&equals;"
        },
        {   // Text between quotation marks
            "regex": /("(.*?)"|'(.*?)')/gm,
            "replaceTo": "<font class='mini-code-editor-green'>$&</font>"
        },
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\-\-.*))/,
            "replaceTo": "<font class='mini-code-editor-red'>$&</font>"
        },
        {   // idk why the i flag doesn't work :(
            "regex": /\b(select|create|insert|table|alter|to|rename|column|drop|add|into|values)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(SELECT|CREATE|INSERT|TABLE|ALTER|TO|RENAME|COLUMN|DROP|ADD|INTO|VALUES)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
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
    "shortcuts": []
}