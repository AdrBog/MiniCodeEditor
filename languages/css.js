const CSS_RULES = {
    "highlights": [
        {
            "regex": /;/g,
            "replaceTo": "&semi;"
        },
        {
            "regex": /:/g,
            "replaceTo": "&colon;"
        },
        {
            "regex": /&(?!(semi;|colon;))/gm,
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
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/))/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-green-imp'>$&</SPAN>"
        },
        {   // Value
            "regex": /(?<=\&colon;)(.*?)(?=\&semi;)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {   // Property
            "regex": /([^{}&;]+)(?=&colon;)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-red'>$&</SPAN>"
        },
        {   // Selector
            "regex": /(\s|^)(.*?)\s*(?={)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-brown'>$&</SPAN>"
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
    "shortcuts":[
        {
            "keyword": "body",
            "left": "body {\n\tmargin: 40px auto;\n\tmax-width: 650px;\n\tline-height: 1.6;\n\tfont-size: 18px;\n\tpadding: 0 10px;\n}",
            "right": ""
        },
        {
            "keyword": "*",
            "left": "* {\n\tbox-sizing: border-box;\n}",
            "right": ""
        },
    ]
}
