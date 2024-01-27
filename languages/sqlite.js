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
            "replaceTo": "<font class='mini-code-editor-green-imp'>$&</font>"
        },
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\-\-.*))/,
            "replaceTo": "<font class='mini-code-editor-red-imp'>$&</font>"
        },
        {   // idk why the i flag doesn't work :(
            "regex": /\b(add|ADD)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(alter|ALTER)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(autoincrement|AUTOINCREMENT)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(create|CREATE)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(column|COLUMN)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(drop|DROP)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(foreign|FOREIGN)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(from|FROM)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(insert|INSERT)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(into|INTO)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(key|KEY)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(not|NOT)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(null|NULL)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(primary|PRIMARY)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(references|REFERENCES)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(rename|RENAME)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(select|SELECT)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(table|TABLE)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(to|TO)\b/ig,
            "replaceTo": "<font class='mini-code-editor-blue'>$&</font>"
        },
        {
            "regex": /\b(values|VALUES)\b/ig,
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