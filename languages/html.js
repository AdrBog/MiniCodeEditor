const HTML_RULES = {
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
            "replaceTo": "<SPAN CLASS='mini-code-editor-brown'>$&</SPAN>"
        },
        {   // Tags
            "regex": /(?<=\&lt;(?!\!--))(.*?)(?=\&gt;)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        /*
        {   // Tags
            "regex": /&lt;(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+&gt;/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        */
        {   // Tags
            "regex": /(\w*) *&equals; *((['"])?((\\\3|[^\3])*?)\3|(\w+))/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-red'>$&</SPAN>"
        },
        {   // Comments
            "regex": /&lt;!--[^>]*--&gt;/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-green'>$&</SPAN>"
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
        "`": "`",
        "[": "]",
        "<": ">"
    },
    "backspace_pairs": ["\"\"", "''", "()", "{}", "[]", "<>"],
    "newline_pairs": ["()", "{}", "[]","``","><"],
    "shortcuts": [
        {
            "keyword": "html",
            "left": "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>Document</title>\n\t</head>\n\t<body>\n\t\t",
            "right": "\n\t</body>\n</html>"
        },
        {
            "keyword": "form",
            "left": "<form action='' method=''>\n\t",
            "right": "\n</form>"
        },
        {
            "keyword": "dialog",
            "left": "<dialog id=\"dialog\">\n\t",
            "right": "\n\t<button onclick=\"dialog.close()\">Close</button>\n</dialog>"
        }
    ]
}