const PYTHON_RULES = {
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
        {
            "regex": /\"/g,
            "replaceTo": "&quot;"
        },
        {
            "regex": /\'/g,
            "replaceTo": "&apos;"
        },
        {   // Comments
            "regex": /(&quot;&quot;&quot;[\s\S]*?&quot;&quot;&quot;|&apos;&apos;&apos;[\s\S]*?&apos;&apos;&apos;)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-brown-imp'>$&</SPAN>"
        },
        {   // Comments 2
            "regex": /(?:\#.*)/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-green-imp'>$&</SPAN>"
        },
        {   // Text between quotation marks
            "regex": /(&quot;(.*?)&quot|&apos;(.*?)&apos);/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-brown-imp'>$&</SPAN>"
        },
        {   // Functions
            "regex": /([a-zA-Z_{1}][a-zA-Z0-9_]+)(?= *\()/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {   // Numbers
            "regex": /\b((?!-0?(\.0+)?(e|$))-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)(e-?(0|[1-9]\d*))?|0x[0-9a-f]+)\b/ig,
            "replaceTo": "<SPAN CLASS='mini-code-editor-red'>$&</SPAN>"
        },
        {
            "regex": /\b(def|return)\b/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(if|elif|else)\b/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(try|except|finally|raise)\b/gm,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {   // Data types
            "regex": /\b(str|int|float|complex|list|tuple|range|dict|set|frozenset|bool|bytes|bytearray|memoryview|None)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(global)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(for|in|while|pass|break|continue)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(class|self)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(lambda)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(del)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(from|import|as)\b/g,
            "replaceTo": "<SPAN CLASS='mini-code-editor-blue'>$&</SPAN>"
        },
        {
            "regex": /\b(True|False)\b/g,
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
    "newline_pairs": ["()", "{}", "[]","``"],
    "shortcuts": [
        {
            "keyword": "def",
            "left": "def ",
            "right": "():\n\t"
        },
        {
            "keyword": "if",
            "left": "if ",
            "right": ":\n\t"
        },
        {
            "keyword": "ife",
            "left": "if ",
            "right": ":\n\t\nelse:\n\t"
        },
        {
            "keyword": "ifel",
            "left": "if ",
            "right": ":\n\t\nelif :\n\t\nelse:\n\t"
        }
    ]
}
