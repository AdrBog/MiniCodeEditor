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
        {   // Tags attributes
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
            "keyword": "a",
            "left": "<a href=\"",
            "right": "\"></a>"
        },
        {
            "keyword": "dialog",
            "left": "<dialog id=\"dialog\">\n\t",
            "right": "\n\t<button onclick=\"dialog.close()\">Close</button>\n</dialog>"
        },
        {
            "keyword": "form",
            "left": "<form action='' method=''>\n\t",
            "right": "\n</form>"
        },
        {
            "keyword": "h1",
            "left": "<h1>",
            "right": "</h1>"
        },
        {
            "keyword": "h2",
            "left": "<h2>",
            "right": "</h2>"
        },
        {
            "keyword": "h3",
            "left": "<h3>",
            "right": "</h3>"
        },
        {
            "keyword": "h4",
            "left": "<h4>",
            "right": "</h4>"
        },
        {
            "keyword": "h5",
            "left": "<h5>",
            "right": "</h5>"
        },
        {
            "keyword": "h6",
            "left": "<h6>",
            "right": "</h6>"
        },
        {
            "keyword": "html",
            "left": "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>Document</title>\n\t</head>\n\t<body>\n\t\t",
            "right": "\n\t</body>\n</html>"
        },
        {
            "keyword": "if",
            "left": "<iframe src=\"",
            "right": "\">"
        },
        {
            "keyword": "img",
            "left": "<img src=\"",
            "right": "\" alt=\"\">"
        },
        {
            "keyword": "in",
            "left": "<input type=\"text\" name=\"",
            "right": "\">"
        },
        {
            "keyword": "ine",
            "left": "<input type=\"email\" name=\"",
            "right": "\">"
        },
        {
            "keyword": "inp",
            "left": "<input type=\"password\" name=\"",
            "right": "\">"
        },
        {
            "keyword": "label",
            "left": "<label for=\"",
            "right": "\"></label>"
        },
        {
            "keyword": "p",
            "left": "<p>\n\t",
            "right": "\n</p>"
        },
        {
            "keyword": "script",
            "left": "<script>\n\t",
            "right": "\n</script>"
        },
        {
            "keyword": "style",
            "left": "<style>\n\t",
            "right": "\n</style>"
        }
    ]
}
