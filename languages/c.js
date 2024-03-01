const C_RULES = {
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
        {
            "regex": /&lt;(.*?)&gt;/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-brown-imp'>$&</SPAN>"
        },
        {   // Comments
            "regex": /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/,
            "replaceTo": "<SPAN CLASS='mini-code-editor-green-imp'>$&</SPAN>"
        },
        {
            "regex": /(?:\#.*)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-purple'>$&</SPAN>"
        },
        {   // Functions
            "regex": /([a-zA-Z_{1}][a-zA-Z0-9_]+)(?= *\()/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {   // Every type of number
            "regex": /\b((?!-0?(\.0+)?(e|$))-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)(e-?(0|[1-9]\d*))?|0x[0-9a-f]+)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-red'>$&</SPAN>"
        },
        {
            "regex": /\b(char|int|short|long|double|float|void)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(unsigned|signed)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(register|static|extern)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(do|while|for|break|continue)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(return)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(if|else|switch|case|default)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(goto)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(struct)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(enum)\b/g,
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
        "[": "]"
    },
    "backspace_pairs": ["\"\"", "''", "()", "{}", "[]"],
    "newline_pairs": ["()", "{}", "[]"],
    "shortcuts":[
        {
            "keyword": "def",
            "left": "#define "
        },
        {
            "keyword": "enum",
            "left": "enum ",
            "right": " {\n\t\n};"
        },
        {
            "keyword": "main",
            "left": "#include <stdio.h>\n\nint main(int argc, char *argv[])\n{\n\t",
            "right": "\n\treturn 0;\n}"
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
            "keyword": "inc",
            "left": "#include "
        },
        {
            "keyword": "for",
            "left": "for (int i = 0; i <= 10; i++) {\n\t",
            "right": "\n}"
        },
        {
            "keyword": "pf",
            "left": "printf(\"",
            "right": "\\n\");"
        },
        {
            "keyword": "struct",
            "left": "struct ",
            "right": " {\n\t\n};"
        },
        {
            "keyword": "sw",
            "left": "switch (",
            "right": ") {\n\tcase 1:\n\t\tbreak;\n\tdefault:\n\t\t\n}"
        }
    ]
}
