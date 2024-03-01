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
            "replaceTo": "<SPAN class='mini-code-editor-green-imp'>$&</SPAN>"
        },
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\-\-.*))/,
            "replaceTo": "<SPAN class='mini-code-editor-red-imp'>$&</SPAN>"
        },
        {   // idk why the i flag doesn't work :(
            "regex": /\b(add|ADD)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(alter|ALTER)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(autoincrement|AUTOINCREMENT)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(create|CREATE)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(column|COLUMN)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(drop|DROP)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(foreign|FOREIGN)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(from|FROM)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(insert|INSERT)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(into|INTO)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(key|KEY)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(not|NOT)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(null|NULL)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(primary|PRIMARY)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(references|REFERENCES)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(rename|RENAME)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(select|SELECT)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(table|TABLE)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(to|TO)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(values|VALUES)\b/ig,
            "replaceTo": "<SPAN class='mini-code-editor-blue'>$&</SPAN>"
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
