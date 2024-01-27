const JS_RULES = {
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
            "replaceTo": "<SPAN CLASS='mini-code-editor-brown-imp'>$&</SPAN>"
        },
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/,
            "replaceTo": "<SPAN CLASS='mini-code-editor-green-imp'>$&</SPAN>"
        },
        {   // Every type of number
            // https://stackoverflow.com/questions/2811031/decimal-or-numeric-values-in-regular-expression-validation
            "regex": /\b((?!-0?(\.0+)?(e|$))-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)(e-?(0|[1-9]\d*))?|0x[0-9a-f]+)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-red'>$&</SPAN>"
        },
        {
            "regex": /\b(NaN|undefined|null)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(function|return)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(async|await|then)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(try|catch|throw|finally)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(class|this|constructor|extends|super|static)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(if|else|switch|case|default)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(do|while|for|of|in|until|break|continue)\b/g,
            "replaceTo": "<b CLASS='mini-code-editor-blue'>$&</b>"
        },
        {
            "regex": /\b(let|const|new|var|typeof)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(true|false)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
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
        "[": "]"
    },
    "backspace_pairs": ["\"\"", "''", "()", "{}", "[]"],
    "newline_pairs": ["()", "{}", "[]","``"],
    "shortcuts":[
        {
            "keyword": "afun",
            "left": "async function ",
            "right": "()\n{\n\t\n}"
        },
        {
            "keyword": "ca",
            "left": "case ",
            "right": ":\n\t\n\tbreak;"
        },
        {
            "keyword": "cl",
            "left": "console.log(\"",
            "right": "\")"
        },
        {
            "keyword": "cls",
            "left": "class ",
            "right": "\n{\n\t\n}"
        },
        {
            "keyword": "con",
            "left": "constructor()\n{\n\t",
            "right": "\n}"
        },
        {
            "keyword": "if",
            "left": "if (",
            "right": ") {\n\t\n}"
        },
        {
            "keyword": "ife",
            "left": "if (",
            "right": ") {\n\t\n} else {\n\t\n}"
        },
        {
            "keyword": "ifel",
            "left": "if (",
            "right": ") {\n\t\n} else if () {\n\t\n} else {\n\t\n}"
        },
        {
            "keyword": "for",
            "left": "for (int i = 0; i <= 10; i++)\n{\n\t",
            "right": "\n}"
        },
        {
            "keyword": "fun",
            "left": "function ",
            "right": "()\n{\n\t\n}"
        },
        {
            "keyword": "getid",
            "left": "document.getElementById(\"",
            "right": "\")"
        },
        {
            "keyword": "sw",
            "left": "switch (",
            "right": ") {\n\tcase 1:\n\t\tbreak;\n\tdefault:\n\t\t\n}"
        },
    ]
}