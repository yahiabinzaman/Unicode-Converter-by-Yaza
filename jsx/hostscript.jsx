#target illustrator

var Bijoy2UnicodeEngine = (function () {
    var rawMapV1 = {
        "0": "\u09E6",
        "1": "\u09E7",
        "2": "\u09E8",
        "3": "\u09E9",
        "4": "\u09EA",
        "5": "\u09EB",
        "6": "\u09EC",
        "7": "\u09ED",
        "8": "\u09EE",
        "9": "\u09EF",
        "i\xA8": "\u09B0\u200C\u09CD\u09AF",
        "\xAA\xA8": "\u09CD\u09B0\u09CD\u09AF",
        "\xB2": "\u0995\u09CD\u09B7\u09CD\u09AE",
        "\xB0": "\u0995\u09CD\u0995",
        "\xB1": "\u0995\u09CD\u099F",
        "\xB3\xA1": "\u0995\u09CD\u09A4\u09CD\u09AC",
        "\xB3": "\u0995\u09CD\u09A4",
        "K\xA1": "\u0995\u09CD\u09AC",
        "\xAF\u0152": "\u09B8\u09CD\u0995\u09CD\u09B0",
        "\xB5": "\u0995\u09CD\u09B0",
        "\xAF\u2039\xAC": "\u09B8\u09CD\u0995\u09CD\u09B2",
        "K\xAC": "\u0995\u09CD\u09B2",
        "K\xE8": "\u0995\u09CD\u09A8",
        "\xB4": "\u0995\u09CD\u09AE",
        "\xB6\xE8": "\u0995\u09CD\u09B7\u09CD\u09A3",
        "\xB6\xA1": "\u0995\u09CD\u09B7\u09CD\u09AC",
        "\u2022\xB6": "\u0999\u09CD\u0995\u09CD\u09B7",
        "\xB6": "\u0995\u09CD\u09B7",
        "\xB7": "\u0995\u09CD\u09B8",
        "L\xA1": "\u0996\u09CD\u09AC",
        "\xB8": "\u0997\u09C1",
        "\xBA": "\u0997\u09CD\u09A6",
        "M\xA6": "\u0997\u09CD\u09AC",
        "\xBB": "\u0997\u09CD\u09A7",
        "M\u0153": "\u0997\u09CD\u09A8",
        "M\xA5": "\u0997\u09CD\u09AE",
        "M\xAD": "\u0997\u09CD\u09B2",
        "N\xA1": "\u0998\u09CD\u09AC",
        "N\u0153": "\u0998\u09CD\u09A8",
        "\xBC": "\u0999\u09CD\u0995",
        "\u2022g": "\u0999\u09CD\u09AE",
        "\u2022L": "\u0999\u09CD\u0996",
        "\xBD": "\u0999\u09CD\u0997",
        "\u2022N": "\u0999\u09CD\u0998",
        "\u2022": "\u0995\u09CD\u09B8",
        "\u201DQ\xA1": "\u099A\u09CD\u099B\u09CD\u09AC",
        "\u201DQ\xA6": "\u099A\u09CD\u099B\u09CD\u09AC",
        "\u201DP": "\u099A\u09CD\u099A",
        "\u201DQ": "\u099A\u09CD\u099B",
        "\u201DT": "\u099A\u09CD\u099E",
        "Q\xA1": "\u099B\u09CD\u09AC",
        "\xBE\xA1": "\u099C\u09CD\u099C\u09CD\u09AC",
        "\xBE": "\u099C\u09CD\u099C",
        "\xC0": "\u099C\u09CD\u099D",
        "\xC1": "\u099C\u09CD\u099E",
        "R\xA1": "\u099C\u09CD\u09AC",
        "\xC2": "\u099E\u09CD\u099A",
        "\xC3": "\u099E\u09CD\u099B",
        "\xC4": "\u099E\u09CD\u099C",
        "\xC5": "\u099E\u09CD\u099D",
        "\xC6": "\u099F\u09CD\u099F",
        "U\xA1": "\u099F\u09CD\u09AC",
        "U\xA5": "\u099F\u09CD\u09AE",
        "\xC7": "\u09A1\u09CD\u09A1",
        "\xC8": "\u09A3\u09CD\u099F",
        "\xC9": "\u09A3\u09CD\u09A0",
        "\u2212": "\u09A3\u09CD\u09A2",
        "Y\u0153": "\u09A3\u09CD\u09A3",
        "Y\xA5": "\u09A3\u09CD\u09AE",
        "\xDD": "\u09A8\u09CD\u09B8",
        "\xCA": "\u09A3\u09CD\u09A1",
        "\u0161\u2018": "\u09A8\u09CD\u09A4\u09C1",
        "Y^": "\u09A3\u09CD\u09AC",
        "\xCB\xA1": "\u09A4\u09CD\u09A4\u09CD\u09AC",
        "\xCB": "\u09A4\u09CD\u09A4",
        "\xCC": "\u09A4\u09CD\u09A5",
        "Z\u0153": "\u09A4\u09CD\u09A8",
        "\xCD": "\u09A4\u09CD\u09AE",
        "Z\xAC": "\u09A4\u09CD\u09B2",
        "\u0161\u2014\xA1": "\u09A8\u09CD\u09A4\u09CD\u09AC",
        "\xAF\u2014\xA1": "\u09B8\u09CD\u09A4\u09CD\u09AC",
        "Z\xA1": "\u09A4\u09CD\u09AC",
        "\xCE": "\u09A4\u09CD\u09B0",
        "_\xAD": "\u09A5\u09CD\u09B2",
        "_\xA1": "\u09A5\u09CD\u09AC",
        "\u203A\xD8": "\u09A8\u09CD\u09A6\u09CD\u09AC",
        "\u02DCM": "\u09A6\u09CD\u0997",
        "\u02DCN": "\u09A6\u09CD\u0998",
        "\xCF\xA1": "\u09A6\u09CD\u09A6\u09CD\u09AC",
        "\xCF": "\u09A6\u09CD\u09A6",
        "\xD7\xA1": "\u09A6\u09CD\u09A7\u09CD\u09AC",
        "\xD7": "\u09A6\u09CD\u09A7",
        "`\u0153": "\u09A6\u09CD\u09A8",
        "\xD8": "\u09A6\u09CD\u09AC",
        "\u2122\xA3": "\u09A6\u09CD\u09AD\u09CD\u09B0",
        "\u2122\xA2": "\u09A6\u09CD\u09AD",
        "\xD9": "\u09A6\u09CD\u09AE",
        "a\u0153": "\u09A7\u09CD\u09A8",
        "a\u0178": "\u09A7\u09CD\u09AC",
        "a\xA5": "\u09A7\u09CD\u09AE",
        "\u203AU": "\u09A8\u09CD\u099F",
        "\xDA": "\u09A8\u09CD\u09A0",
        "\xDB": "\u09A8\u09CD\u09A1",
        "\u0161\xCD": "\u09A8\u09CD\u09A4",
        "\u0161\u2014": "\u09A8\u09CD\u09A4",
        "\u0161\xBF": "\u09A8\u09CD\u09A4\u09CD\u09B0",
        "\u0161\u2019": "\u09A8\u09CD\u09A5",
        "\u203A`": "\u09A8\u09CD\u09A6",
        "\xDC": "\u09A8\u09CD\u09A7",
        "b\u0153": "\u09A8\u09CD\u09A8",
        "\u0161^": "\u09A8\u09CD\u09AC",
        "b\xA5": "\u09A8\u09CD\u09AE",
        "\xDE": "\u09AA\u09CD\u099F",
        "\xDF": "\u09AA\u09CD\u09A4",
        "c\u0153": "\u09AA\u09CD\u09A8",
        "\xE0": "\u09AA\u09CD\u09AA",
        "c\xA5": "\u09AA\u09CD\u09AE",
        "c\xAD": "\u09AA\u09CD\u09B2",
        "\xE1": "\u09AA\u09CD\u09B8",
        "d\xAC": "\u09AB\u09CD\u09B2",
        "\xE2": "\u09AC\u09CD\u099C",
        "\xE3": "\u09AC\u09CD\u09A6",
        "\xE4": "\u09AC\u09CD\u09A7",
        "e\u0178": "\u09AC\u09CD\u09AC",
        "e\xAD": "\u09AC\u09CD\u09B2",
        "f\xAC": "\u09AD\u09CD\u09B2",
        "\xE5": "\u09AD\u09CD\u09B0",
        "\xE6": "\u09AE\u09CD\u09A8",
        "\xA4\xFA": "\u09AE\u09CD\u09AA",
        "\xA4c": "\u09AE\u09CD\u09AA",
        "\xE7": "\u09AE\u09CD\u09AB",
        "\xAE^": "\u09B7\u09CD\u09AC",
        "\xA4^": "\u09AE\u09CD\u09AC",
        "\xA4\xA2": "\u09AE\u09CD\u09AD",
        "\xA4\xA3": "\u09AE\u09CD\u09AD\u09CD\u09B0",
        "\xA4\xA7": "\u09AE\u09CD\u09AE",
        "\xA4\xAA": "\u09AE\u09CD\u09B0",
        "\xA4\xAD": "\u09AE\u09CD\u09B2",
        "\xA4\xAC": "\u09AE\u09CD\u09B2",
        "\xE9": "\u09B2\u09CD\u0995",
        "\xEA": "\u09B2\u09CD\u0997",
        "\xEB": "\u09B2\u09CD\u099F",
        "\xEC": "\u09B2\u09CD\u09A1",
        "\xED": "\u09B2\u09CD\u09AA",
        "\xEE": "\u09B2\u09CD\u09AB",
        "j\xA6": "\u09B2\u09CD\u09AC",
        "j\xA5": "\u09B2\u09CD\u09AE",
        "j\xAD": "\u09B2\u09CD\u09B2",
        "\xEF": "\u09B6\u09C1",
        "\xF0": "\u09B6\u09CD\u099A",
        "\xF1": "\u09B6\u09CD\u099B",
        "k\u0153": "\u09B6\u09CD\u09A8",
        "k\xA6": "\u09B6\u09CD\u09AC",
        "k^": "\u09B6\u09CD\u09AC",
        "k\xA5": "\u09B6\u09CD\u09AE",
        "k\xAD": "\u09B6\u09CD\u09B2",
        "\xAE\u2039": "\u09B7\u09CD\u0995",
        "\xAE\u0152": "\u09B7\u09CD\u0995\u09CD\u09B0",
        "\xF3": "\u09B7\u09CD\u099F",
        "\xF4": "\u09B7\u09CD\u09A0",
        "\xF2": "\u09B7\u09CD\u09A3",
        "\xAE\xFA": "\u09B7\u09CD\u09AA",
        "\xAEc": "\u09B7\u09CD\u09AA",
        "\xF5": "\u09B7\u09CD\u09AB",
        "\xAE\xA7": "\u09B7\u09CD\u09AE",
        "\xAE\xAA": "\u09B7\u09CD\u09B0",
        "\xAF\u2039": "\u09B8\u09CD\u0995",
        "\xF7": "\u09B8\u09CD\u099F",
        "\xF6": "\u09B8\u09CD\u0996",
        "\xAF\u2014": "\u09B8\u09CD\u09A4",
        "\xAF\xCD": "\u09B8\u09CD\u09A4",
        "\xAF\u2018": "\u09B8\u09CD\u09A4\u09C1",
        "\xAF\xBF": "\u09B8\u09CD\u09A4\u09CD\u09B0",
        "\xAF\u2019": "\u09B8\u09CD\u09A5",
        "\xF8": "\u09CD\u09B2",
        "\xAF\xFA": "\u09B8\u09CD\u09AA",
        "\xAFc": "\u09B8\u09CD\u09AA",
        "\xF9": "\u09B8\u09CD\u09AB",
        "\xAF^": "\u09B8\u09CD\u09AC",
        "\xAF\xA7": "\u09B8\u09CD\u09AE",
        "\xAF\xAA": "\u09B8\u09CD\u09B0",
        "\xAF\xAD": "\u09B8\u09CD\u09B2",
        "\xAF\xAC": "\u09B8\u09CD\u09B2",
        "\xFB": "\u09B9\u09C1",
        "n\xE8": "\u09B9\u09CD\u09A3",
        "n\u0178": "\u09B9\u09CD\u09AC",
        "\xFD": "\u09B9\u09CD\u09A8",
        "\xFE": "\u09B9\u09CD\u09AE",
        "n\xAC": "\u09B9\u09CD\u09B2",
        "\xFC": "\u09B9\u09C3",
        "\xFF": "\u09DC\u09CD\u0997",
        "\xA9": "\u09B0\u09CD",
        "Av": "\u0986",
        "A": "\u0985",
        "B": "\u0987",
        "C": "\u0988",
        "D": "\u0989",
        "E": "\u098A",
        "F": "\u098B",
        "G": "\u098F",
        "H": "\u0990",
        "I": "\u0993",
        "J": "\u0994",
        "K": "\u0995",
        "L": "\u0996",
        "M": "\u0997",
        "N": "\u0998",
        "O": "\u0999",
        "P": "\u099A",
        "Q": "\u099B",
        "R": "\u099C",
        "S": "\u099D",
        "T": "\u099E",
        "U": "\u099F",
        "V": "\u09A0",
        "W": "\u09A1",
        "X": "\u09A2",
        "Y": "\u09A3",
        "Z": "\u09A4",
        "_": "\u09A5",
        "`": "\u09A6",
        "a": "\u09A7",
        "b": "\u09A8",
        "c": "\u09AA",
        "d": "\u09AB",
        "e": "\u09AC",
        "f": "\u09AD",
        "g": "\u09AE",
        "h": "\u09AF",
        "i": "\u09B0",
        "j": "\u09B2",
        "k": "\u09B6",
        "l": "\u09B7",
        "m": "\u09B8",
        "n": "\u09B9",
        "o": "\u09DC",
        "p": "\u09DD",
        "q": "\u09DF",
        "r": "\u09CE",
        "\\$": "\u09F3",
        "<<": "\u098D",
        ">>": "\u098E",
        "v": "\u09BE",
        "w": "\u09BF",
        "x": "\u09C0",
        "y": "\u09C1",
        "z": "\u09C1",
        "~": "\u09C2",
        "\u201A": "\u09C2",
        "\u0192": "\u09C2",
        "\u201E": "\u09C3",
        "\u201C": "\u09C1",
        "\u2021": "\u09C7",
        "\u2020": "\u09C7",
        "\u2030": "\u09C8",
        "\u02C6": "\u09C8",
        "\x88": "\u09C8",
        "ˆ": "\u09C8",
        "\u2030": "\u09C8",
        "‰": "\u09C8",
        "\u0160": "\u09D7",
        "\x8A": "\u09D7",
        "Š": "\u09D7",
        "š": "\u09D7",
        "\xD0": "-",
        "\xD4": "\u2019",
        "\xD5": "\u2019",
        "\\|": "\u0964",
        "\\\\": "\u0965",
        "\xD2": "\u201C",
        "\xD3": "\u201D",
        "s": "\u0982",
        "t": "\u0983",
        "u": "\u0981",
        "\xAA": "\u09CD\u09B0",
        "\xD6": "\u09CD\u09B0",
        "\xAB": "\u09CD\u09B0",
        "\xA8": "\u09CD\u09AF",
        "\xA6": "\u09CD\u09AC",
        "\xA1": "\u09CD\u09AC",
        "\xAC": "\u09CD\u09B2",
        "\xAD": "\u09CD\u09B2",
        "\xE8": "\u09CD\u09A8",
        "\u0153": "\u09CD\u09A8",
        "\\&": "\u09CD",
        "\u2026": "\u09C3",
        "|": "\u0964",
        "\u2018": "\u2019",
        "\u2019": "\u2019",
        "\xA2": "\u09AD",
        "\xA2e": "\u09AD\u09CD\u09AC"
    };

    var rawMapV2 = {
        "0": "\u09E6",
        "1": "\u09E7",
        "2": "\u09E8",
        "3": "\u09E9",
        "4": "\u09EA",
        "5": "\u09EB",
        "6": "\u09EC",
        "7": "\u09ED",
        "8": "\u09EE",
        "9": "\u09EF",
        "i\xA8": "\u09B0\u200C\u09CD\u09AF",
        "\xAA\xA8": "\u09CD\u09B0\u09CD\u09AF",
        "\xB2": "\u0995\u09CD\u09B7\u09CD\u09AE",
        "\xB0": "\u0995\u09CD\u0995",
        "\xB1": "\u0995\u09CD\u099F",
        "\xB3\xA1": "\u0995\u09CD\u09A4\u09CD\u09AC",
        "\xB3": "\u0995\u09CD\u09A4",
        "K\xA1": "\u0995\u09CD\u09AC",
        "\xAF\u0152": "\u09B8\u09CD\u0995\u09CD\u09B0",
        "\xB5": "\u0995\u09CD\u09B0",
        "\xAF\u2039\xAC": "\u09B8\u09CD\u0995\u09CD\u09B2",
        "K\xAC": "\u0995\u09CD\u09B2",
        "K\xE8": "\u0995\u09CD\u09A8",
        "\xB4": "\u0995\u09CD\u09AE",
        "\xFF\xA1": "\u0995\u09CD\u09B7\u09CD\u09AC",
        "\xFF\xE8": "\u0995\u09CD\u09B7\u09CD\u09A3",
        "\u2022\xFF": "\u0999\u09CD\u0995\u09CD\u09B7",
        "\xFF": "\u0995\u09CD\u09B7",
        "\xB7": "\u0995\u09CD\u09B8",
        "L\xA1": "\u0996\u09CD\u09AC",
        "\xB8": "\u0997\u09C1",
        "\xBA": "\u0997\u09CD\u09A6",
        "\xBB": "\u0997\u09CD\u09A7",
        "M\u0153": "\u0997\u09CD\u09A8",
        "M\xA6": "\u0997\u09CD\u09AC",
        "M\xA5": "\u0997\u09CD\u09AE",
        "M\xF8": "\u0997\u09CD\u09B2",
        "N\xA1": "\u0998\u09CD\u09AC",
        "N\u0153": "\u0998\u09CD\u09A8",
        "\xBC": "\u0999\u09CD\u0995",
        "\u2022g": "\u0999\u09CD\u09AE",
        "\u2022L": "\u0999\u09CD\u0996",
        "\xBD": "\u0999\u09CD\u0997",
        "\u2022N": "\u0999\u09CD\u0998",
        "\u2022": "\u0995\u09CD\u09B8",
        "\u201DQ\xA1": "\u099A\u09CD\u099B\u09CD\u09AC",
        "\u201DQ\xA6": "\u099A\u09CD\u099B\u09CD\u09AC",
        "\u201DP": "\u099A\u09CD\u099A",
        "\u201DQ": "\u099A\u09CD\u099B",
        "\u201DT": "\u099A\u09CD\u099E",
        "Q\xA1": "\u099B\u09CD\u09AC",
        "\xBE\xA1": "\u099C\u09CD\u099C\u09CD\u09AC",
        "\xBE": "\u099C\u09CD\u099C",
        "\xC0": "\u099C\u09CD\u099D",
        "\xC1": "\u099C\u09CD\u099E",
        "R\xA1": "\u099C\u09CD\u09AC",
        "\xC2": "\u099E\u09CD\u099A",
        "\xC3": "\u099E\u09CD\u099B",
        "\xC4": "\u099E\u09CD\u099C",
        "\xC5": "\u099E\u09CD\u099D",
        "\xC6": "\u099F\u09CD\u099F",
        "U\xA1": "\u099F\u09CD\u09AC",
        "U\xA5": "\u099F\u09CD\u09AE",
        "\xC7": "\u09A1\u09CD\u09A1",
        "\xC8": "\u09A3\u09CD\u099F",
        "\xC9": "\u09A3\u09CD\u09A0",
        "\u2212": "\u09A3\u09CD\u09A2",
        "Y\u0153": "\u09A3\u09CD\u09A3",
        "Y\xA5": "\u09A3\u09CD\u09AE",
        "\xDD": "\u09A8\u09CD\u09B8",
        "\xD0": "\u09A3\u09CD\u09A1",
        "\u0161\u2018": "\u09A8\u09CD\u09A4\u09C1",
        "Y^": "\u09A3\u09CD\u09AC",
        "\xCB\xA1": "\u09A4\u09CD\u09A4\u09CD\u09AC",
        "\xCB": "\u09A4\u09CD\u09A4",
        "\xCC": "\u09A4\u09CD\u09A5",
        "Z\xA5": "\u09A4\u09CD\u09AE",
        "Z\u0153": "\u09A4\u09CD\u09A8",
        "\u0161\xCD\xA1": "\u09A8\u09CD\u09A4\u09CD\u09AC",
        "\xAF\xCD\xA1": "\u09B8\u09CD\u09A4\u09CD\u09AC",
        "Z\xA1": "\u09A4\u09CD\u09AC",
        "\xCE": "\u09A4\u09CD\u09B0",
        "Z\xAC": "\u09A4\u09CD\u09B2",
        "_\xF8": "\u09A5\u09CD\u09B2",
        "_\xA1": "\u09A5\u09CD\u09AC",
        "\u203A\xD8": "\u09A8\u09CD\u09A6\u09CD\u09AC",
        "\u02DCM": "\u09A6\u09CD\u0997",
        "\u02DCN": "\u09A6\u09CD\u0998",
        "\xCF\xA1": "\u09A6\u09CD\u09A6\u09CD\u09AC",
        "\xCF": "\u09A6\u09CD\u09A6",
        "\xD7\xA1": "\u09A6\u09CD\u09A7\u09CD\u09AC",
        "\xD7": "\u09A6\u09CD\u09A7",
        "`\u0153": "\u09A6\u09CD\u09A8",
        "\xD8": "\u09A6\u09CD\u09AC",
        "\u2122\xA3": "\u09A6\u09CD\u09AD\u09CD\u09B0",
        "\u2122\xA2": "\u09A6\u09CD\u09AD",
        "\xD9": "\u09A6\u09CD\u09AE",
        "a\u0153": "\u09A7\u09CD\u09A8",
        "a\u0178": "\u09A7\u09CD\u09AC",
        "a\xA5": "\u09A7\u09CD\u09AE",
        "\u203AU": "\u09A8\u09CD\u099F",
        "\xDA": "\u09A8\u09CD\u09A0",
        "\xDB": "\u09A8\u09CD\u09A1",
        "\u0161\xCD": "\u09A8\u09CD\u09A4",
        "\u0161\xBF": "\u09A8\u09CD\u09A4\u09CD\u09B0",
        "\u0161\u2019": "\u09A8\u09CD\u09A5",
        "\u203A`": "\u09A8\u09CD\u09A6",
        "\xDC": "\u09A8\u09CD\u09A7",
        "b\u0153": "\u09A8\u09CD\u09A8",
        "\u0161^": "\u09A8\u09CD\u09AC",
        "b\xA5": "\u09A8\u09CD\u09AE",
        "\xDE": "\u09AA\u09CD\u099F",
        "\xDF": "\u09AA\u09CD\u09A4",
        "c\u0153": "\u09AA\u09CD\u09A8",
        "\xE0": "\u09AA\u09CD\u09AA",
        "c\xA5": "\u09AA\u09CD\u09AE",
        "c\xF8": "\u09AA\u09CD\u09B2",
        "\xE1": "\u09AA\u09CD\u09B8",
        "d\xAC": "\u09AB\u09CD\u09B2",
        "\xE2": "\u09AC\u09CD\u099C",
        "\xE3": "\u09AC\u09CD\u09A6",
        "\xE4": "\u09AC\u09CD\u09A7",
        "e\u0178": "\u09AC\u09CD\u09AC",
        "e\xF8": "\u09AC\u09CD\u09B2",
        "\xE5": "\u09AD\u09CD\u09B0",
        "f\xAC": "\u09AD\u09CD\u09B2",
        "\xA4\u0153": "\u09AE\u09CD\u09A8",
        "\xA4\xFA": "\u09AE\u09CD\u09AA",
        "\xA4c": "\u09AE\u09CD\u09AA",
        "\xE7": "\u09AE\u09CD\u09AB",
        "\xAE^": "\u09B7\u09CD\u09AC",
        "\xA4^": "\u09AE\u09CD\u09AC",
        "\xA4\xA2": "\u09AE\u09CD\u09AD",
        "\xA4\xA3": "\u09AE\u09CD\u09AD\u09CD\u09B0",
        "\xA4\xA7": "\u09AE\u09CD\u09AE",
        "\xA4\xAA": "\u09AE\u09CD\u09B0",
        "\xA4\xF8": "\u09AE\u09CD\u09B2",
        "\xA4\xAC": "\u09AE\u09CD\u09B2",
        "\xE9": "\u09B2\u09CD\u0995",
        "\xEA": "\u09B2\u09CD\u0997",
        "\xEB": "\u09B2\u09CD\u099F",
        "\xEC": "\u09B2\u09CD\u09A1",
        "\xED": "\u09B2\u09CD\u09AA",
        "\xEE": "\u09B2\u09CD\u09AB",
        "j\xA6": "\u09B2\u09CD\u09AC",
        "j\xA5": "\u09B2\u09CD\u09AE",
        "j\xF8": "\u09B2\u09CD\u09B2",
        "\xEF": "\u09B6\u09C1",
        "\xF0": "\u09B6\u09CD\u099A",
        "\xF1": "\u09B6\u09CD\u099B",
        "k\u0153": "\u09B6\u09CD\u09A8",
        "k\xA6": "\u09B6\u09CD\u09AC",
        "k^": "\u09B6\u09CD\u09AC",
        "k\xA5": "\u09B6\u09CD\u09AE",
        "k\xF8": "\u09B6\u09CD\u09B2",
        "\xAE\u2039": "\u09B7\u09CD\u0995",
        "\xAE\u0152": "\u09B7\u09CD\u0995\u09CD\u09B0",
        "\xF3": "\u09B7\u09CD\u099F",
        "\xF4": "\u09B7\u09CD\u09A0",
        "\xF2": "\u09B7\u09CD\u09A3",
        "\xAE\xFA": "\u09B7\u09CD\u09AA",
        "\xAEc": "\u09B7\u09CD\u09AA",
        "\xF5": "\u09B7\u09CD\u09AB",
        "\xAE\xA7": "\u09B7\u09CD\u09AE",
        "\xAE\xAA": "\u09B7\u09CD\u09B0",
        "\xAF\u2039": "\u09B8\u09CD\u0995",
        "\xF7": "\u09B8\u09CD\u099F",
        "\xF6": "\u09B8\u09CD\u0996",
        "\xAF\u2018": "\u09B8\u09CD\u09A4\u09C1",
        "\xAF\xCD": "\u09B8\u09CD\u09A4",
        "\xAF\xBF": "\u09B8\u09CD\u09A4\u09CD\u09B0",
        "\xAF\u2019": "\u09B8\u09CD\u09A5",
        "m\u0153": "\u09B8\u09CD\u09A8",
        "\xAF\xFA": "\u09B8\u09CD\u09AA",
        "\xAFc": "\u09B8\u09CD\u09AA",
        "\xF9": "\u09B8\u09CD\u09AB",
        "\xAF^": "\u09B8\u09CD\u09AC",
        "\xAF\xA7": "\u09B8\u09CD\u09AE",
        "\xAF\xAA": "\u09B8\u09CD\u09B0",
        "\xAF\xF8": "\u09B8\u09CD\u09B2",
        "\xAF\xAC": "\u09B8\u09CD\u09B2",
        "\xFB": "\u09B9\u09C1",
        "n\xE8": "\u09B9\u09CD\u09A3",
        "n\u0178": "\u09B9\u09CD\u09AC",
        "\xFD": "\u09B9\u09CD\u09A8",
        "\xFE": "\u09B9\u09CD\u09AE",
        "n\xAC": "\u09B9\u09CD\u09B2",
        "\xFC": "\u09B9\u09C3",
        "\u2014M": "\u09DC\u09CD\u0997",
        "\xA9": "\u09B0\u09CD",
        "Av": "\u0986",
        "A": "\u0985",
        "B": "\u0987",
        "C": "\u0988",
        "D": "\u0989",
        "E": "\u098A",
        "F": "\u098B",
        "G": "\u098F",
        "H": "\u0990",
        "I": "\u0993",
        "J": "\u0994",
        "K": "\u0995",
        "L": "\u0996",
        "M": "\u0997",
        "N": "\u0998",
        "O": "\u0999",
        "P": "\u099A",
        "Q": "\u099B",
        "R": "\u099C",
        "S": "\u099D",
        "T": "\u099E",
        "U": "\u099F",
        "V": "\u09A0",
        "W": "\u09A1",
        "X": "\u09A2",
        "Y": "\u09A3",
        "Z": "\u09A4",
        "_": "\u09A5",
        "`": "\u09A6",
        "a": "\u09A7",
        "b": "\u09A8",
        "c": "\u09AA",
        "d": "\u09AB",
        "e": "\u09AC",
        "f": "\u09AD",
        "g": "\u09AE",
        "h": "\u09AF",
        "i": "\u09B0",
        "j": "\u09B2",
        "k": "\u09B6",
        "l": "\u09B7",
        "m": "\u09B8",
        "n": "\u09B9",
        "o": "\u09DC",
        "p": "\u09DD",
        "q": "\u09DF",
        "r": "\u09CE",
        "\\$": "\u09F3",
        "<<": "\u098D",
        ">>": "\u098E",
        "v": "\u09BE",
        "w": "\u09BF",
        "x": "\u09C0",
        "y": "\u09C1",
        "z": "\u09C1",
        "~": "\u09C2",
        "\u201A": "\u09C2",
        "\u0192": "\u09C2",
        "\u201E": "\u09C3",
        "\xE6": "\u09C1",
        "\u2013": "\u09C1",
        "\u2021": "\u09C7",
        "\u2020": "\u09C7",
        "\u2030": "\u09C8",
        "\u02C6": "\u09C8",
        "\x88": "\u09C8",
        "ˆ": "\u09C8",
        "\u2030": "\u09C8",
        "‰": "\u09C8",
        "\u0160": "\u09D7",
        "\x8A": "\u09D7",
        "Š": "\u09D7",
        "š": "\u09D7",
        "\xD4": "\u2019",
        "\xD5": "\u2019",
        "\\|": "\u0964",
        "\\\\": "\u0965",
        "\xD2": "\u201C",
        "\xD3": "\u201D",
        "s": "\u0982",
        "t": "\u0983",
        "u": "\u0981",
        "\xAA": "\u09CD\u09B0",
        "\xD6": "\u09CD\u09B0",
        "\xAB": "\u09CD\u09B0",
        "\xA8": "\u09CD\u09AF",
        "\xA6": "\u09CD\u09AC",
        "\xA1": "\u09CD\u09AC",
        "\xAC": "\u09CD\u09B2",
        "\xF8": "\u09CD\u09B2",
        "\xE8": "\u09CD\u09A8",
        "\u0153": "\u09CD\u09A8",
        "\\&": "\u09CD",
        "\u2026": "\u09C3",
        "|": "\u0964",
        "\u2018": "\u2019",
        "\u2019": "\u2019",
        "\xA2": "\u09AD",
        "\xA2e": "\u09AD\u09CD\u09AC"
    };

    var rawMapV3 = {
        "0": "\u09E6",
        "1": "\u09E7",
        "2": "\u09E8",
        "3": "\u09E9",
        "4": "\u09EA",
        "5": "\u09EB",
        "6": "\u09EC",
        "7": "\u09ED",
        "8": "\u09EE",
        "9": "\u09EF",
        "\xEE\xFB\xC4": "\u09B0\u200C\u09CD\u09AF",
        "\xCA\xC4": "\u09CD\u09B0\u09CD\u09AF",
        "\"": "\u0995\u09CD\u09B7\u09CD\u09AE",
        "E\xFE": "\u0995\u09CD\u0995",
        "E": "\u0995\u09CD\u0995",
        "Q": "\u0995\u09CD\u099F",
        "_\xB4\xAB": "\u0995\u09CD\u09A4\u09CD\u09AC",
        "_\xAB": "\u0995\u09CD\u09A4",
        "\xF0\xFE": "\u0995\u09CD\u09AC",
        "\xF0": "\u0995\u09CD\u09AC",
        "\xDF\xFE;": "\u09B8\u09CD\u0995\u09CD\u09B0",
        "\xDF;": "\u09B8\u09CD\u0995\u09CD\u09B0",
        "e\xAB": "\u0995\u09CD\u09B0",
        "\xDF\xFE\xCF\xF1": "\u09B8\u09CD\u0995\u09CD\u09B2",
        "\u201E\xCF\xFE": "\u0995\u09CD\u09B2",
        "\u201E\xCF": "\u0995\u09CD\u09B2",
        "\u201E\xF8\xFE": "\u0995\u09CD\u09A8",
        "\u201E\xF8": "\u0995\u09CD\u09A8",
        "\xA9": "\u0995\u09CD\u09AE",
        "\xC7\xF8\xFE": "\u0995\u09CD\u09B7\u09CD\u09A3",
        "\xC7\xF8": "\u0995\u09CD\u09B7\u09CD\u09A3",
        "\xC7\xB4\xFE": "\u0995\u09CD\u09B7\u09CD\u09AC",
        "\xC7\xB4": "\u0995\u09CD\u09B7\u09CD\u09AC",
        "A\xC7\xFE": "\u0999\u09CD\u0995\u09CD\u09B7",
        "A\xC7": "\u0999\u09CD\u0995\u09CD\u09B7",
        "\xC7\xFE": "\u0995\u09CD\u09B7",
        "\xC7": "\u0995\u09CD\u09B7",
        ":": "\u0995\u09CD\u09B8",
        "\u2026\xB4": "\u0996\u09CD\u09AC",
        ">": "\u0997\u09CD\u0997",
        "@\u201D": "\u0997\u09CD\u09A6",
        "\\?\xFE": "\u0997\u09CD\u09A7",
        "\\?": "\u0997\u09CD\u09A7",
        "@\xC0": "\u0997\u09CD\u09A8",
        "@\xBB": "\u0997\u09CD\u09AC",
        "@\xC2": "\u0997\u09CD\u09AE",
        "@\xD5": "\u0997\u09CD\u09B2",
        "\u2021\xB4": "\u0998\u09CD\u09AC",
        "\u2021\xF8": "\u0998\u09CD\u09A8",
        "B\xFE": "\u0999\u09CD\u0995",
        "B": "\u0999\u09CD\u0995",
        "-": "\u0999\u09CD\u09AE",
        "C": "\u0999\u09CD\u0996",
        "D": "\u0999\u09CD\u0997",
        "A\u2021": "\u0999\u09CD\u0998",
        "F\u0160\xB4\xE9": "\u099A\u09CD\u099B\u09CD\u09AC",
        "F\u0160\xB4": "\u099A\u09CD\u099B\u09CD\u09AC",
        "F\u2030\xFE": "\u099A\u09CD\u099A",
        "F\u2030": "\u099A\u09CD\u099A",
        "F\u0160\xE9": "\u099A\u09CD\u099B",
        "F\u0160": "\u099A\u09CD\u099B",
        "\x8E\xFE": "\u099A\u09CD\u099E",
        "\x8E": "\u099A\u09CD\u099E",
        "\u0160\xB4\xE9": "\u099B\u09CD\u09AC",
        "\u0160\xB4": "\u099B\u09CD\u09AC",
        "I\xB5": "\u099C\u09CD\u099C\u09CD\u09AC",
        "I": "\u099C\u09CD\u099C",
        "J": "\u099C\u09CD\u099D",
        "K\xFE\xE9": "\u099C\u09CD\u099E",
        "K": "\u099C\u09CD\u099E",
        "\u2039\xB5": "\u099C\u09CD\u09AC",
        "L": "\u099C\u09CD\u09B0",
        "M\xFE\xE9": "\u099E\u09CD\u099A",
        "M": "\u099E\u09CD\u099A",
        "N\xFE": "\u099E\u09CD\u099B",
        "N": "\u099E\u09CD\u099B",
        "O": "\u099E\u09CD\u099C",
        "P": "\u099E\u09CD\u099D",
        "R": "\u099F\u09CD\u099F",
        "\xDD\xB4\xFE": "\u099F\u09CD\u09AC",
        "\xDD\xB4": "\u099F\u09CD\u09AC",
        "\x8F": "\u099F\u09CD\u09AE",
        "U\xFE": "\u09A1\u09CD\u09A1",
        "U": "\u09A1\u09CD\u09A1",
        "\\^\xF9\xDD\xFE": "\u09A3\u09CD\u099F",
        "\\^\xF9\xDD": "\u09A3\u09CD\u099F",
        "Z\xFE": "\u09A3\u09CD\u09A0",
        "Z": "\u09A3\u09CD\u09A0",
        "\\^\xE9W": "\u09A3\u09CD\u09A2",
        "\\]": "\u09A3\u09CD\u09A3",
        "\\^\xF9\xE9\xC2": "\u09A3\u09CD\u09AE",
        "\xAA": "\u09A8\u09CD\u09B8",
        "\\[\xFE": "\u09A3\u09CD\u09A1",
        "\\[": "\u09A3\u09CD\u09A1",
        "ls\xFE": "\u09A8\u09CD\u09A4\u09C1",
        "ls": "\u09A8\u09CD\u09A4\u09C1",
        "\\^\xE9\xBB": "\u09A3\u09CD\u09AC",
        "_\xB4": "\u09A4\u09CD\u09A4\u09CD\u09AC",
        "_\xC9\xAB": "\u0995\u09CD\u09A4\u09CD\u09B0",
        "_": "\u09A4\u09CD\u09A4",
        "a": "\u09A4\u09CD\u09A5",
        "b": "\u09A4\u09CD\u09A8",
        "d": "\u09A4\u09CD\u09AE",
        "\u201C\xCF\xFE": "\u09A4\u09CD\u09B2",
        "\u201C\xCF": "\u09A4\u09CD\u09B2",
        "gs\xFE": "\u09A8\u09CD\u09A4\u09CD\u09AC",
        "gs": "\u09A8\u09CD\u09A4\u09CD\u09AC",
        "g\xDF\xFE": "\u09B8\u09CD\u09A4\u09CD\u09AC",
        "g\xDF": "\u09B8\u09CD\u09A4\u09CD\u09AC",
        "c": "\u09A4\u09CD\u09AC",
        "e": "\u09A4\u09CD\u09B0",
        "\xED\xCF": "\u09A5\u09CD\u09B2",
        "\xED\xB4": "\u09A5\u09CD\u09AC",
        "rm": "\u09A8\u09CD\u09A6\u09CD\u09AC",
        "\xE5\u2020": "\u09A6\u09CD\u0997",
        "\xE5\u2021": "\u09A6\u09CD\u0998",
        "j\xB5": "\u09A6\u09CD\u09A6\u09CD\u09AC",
        "j": "\u09A6\u09CD\u09A6",
        "k\xB4\xFE": "\u09A6\u09CD\u09A7\u09CD\u09AC",
        "k\xB4": "\u09A6\u09CD\u09A7\u09CD\u09AC",
        "k\xFE": "\u09A6\u09CD\u09A7",
        "k": "\u09A6\u09CD\u09A7",
        "\u201D\xF8": "\u09A6\u09CD\u09A8",
        "m": "\u09A6\u09CD\u09AC",
        "\x9E": "\u09A6\u09CD\u09AD\u09CD\u09B0",
        "q": "\u09A6\u09CD\u09AD",
        "p": "\u09A6\u09CD\u09AE",
        "\u2022\xF8": "\u09A7\u09CD\u09A8",
        "\u2022\xB9": "\u09A7\u09CD\u09AC",
        "\x90": "\u09A7\u09CD\u09AE",
        "r\xDD\xFE": "\u09A8\u09CD\u099F",
        "r\xDD": "\u09A8\u09CD\u099F",
        "t\xFE": "\u09A8\u09CD\u09A0",
        "t": "\u09A8\u09CD\u09A0",
        "u\xFE": "\u09A8\u09CD\u09A1",
        "u": "\u09A8\u09CD\u09A1",
        "hs\xFE": "\u09A8\u09CD\u09A4",
        "hs": "\u09A8\u09CD\u09A4",
        "s\xFEf": "\u09A8\u09CD\u09A4\u09CD\u09B0",
        "s\xFEi": "\u09A8\u09CD\u09A5",
        "r\u201D": "\u09A8\u09CD\u09A6",
        "\xF5\xFE": "\u09A8\u09CD\u09A7",
        "\xF5": "\u09A8\u09CD\u09A7",
        "\xA7\xAC": "\u09A8\u09CD\u09A8",
        "\xA7\xBA": "\u09A8\u09CD\u09AC",
        "\xA7\xC3": "\u09A8\u09CD\u09AE",
        "\xB2Wz": "\u09AA\u09CD\u099F",
        "\xAE": "\u09AA\u09CD\u09A4",
        "\xB2\xC0": "\u09AA\u09CD\u09A8",
        "\xAF": "\u09AA\u09CD\u09AA",
        "\xB2\xD5": "\u09AA\u09CD\u09B2",
        "\xB0": "\u09AA\u09CD\u09B8",
        "\x81\xFE": "\u09AB\u09CD\u099F",
        "\x81": "\u09AB\u09CD\u099F",
        "\u0161\xCF\xFE": "\u09AB\u09CD\u09B2",
        "\u0161\xCF": "\u09AB\u09CD\u09B2",
        "\xB6": "\u09AC\u09CD\u099C",
        "\xB7": "\u09AC\u09CD\u09A6",
        "w": "\u09A8\u09CD\u09A6\u09CD\u09B0",
        "\xB8\xFE": "\u09AC\u09CD\u09A7",
        "\xB8": "\u09AC\u09CD\u09A7",
        "\xEE\xB9": "\u09AC\u09CD\u09AC",
        "\xEE\xCF": "\u09AC\u09CD\u09B2",
        "\xBC": "\u09AD\u09CD\u09B0",
        "\xA6\xCF\xFE": "\u09AD\u09CD\u09B2",
        "\xA6\xCF": "\u09AD\u09CD\u09B2",
        "\xC1\xAC": "\u09AE\u09CD\u09A8",
        "\xDF\xFE\xB1": "\u09B8\u09CD\u09AA\u09CD\u09B0",
        "\xC1\xB1": "\u09AE\u09CD\u09AA\u09CD\u09B0",
        "\xDC\xB1": "\u09B7\u09CD\u09AA\u09CD\u09B0",
        "\xC1\u2122": "\u09AE\u09CD\u09AA",
        "\xC1\xB3\xFE": "\u09AE\u09CD\u09AB",
        "\xC1\xB3": "\u09AE\u09CD\u09AB",
        "\xDC\xBA": "\u09B7\u09CD\u09AC",
        "\xC1\xBA": "\u09AE\u09CD\u09AC",
        "\xBD\xFE": "\u09AE\u09CD\u09AD",
        "\xBD": "\u09AE\u09CD\u09AD",
        "\xBE": "\u09AE\u09CD\u09AD\u09CD\u09B0",
        "\xC1\xBF": "\u09AE\u09CD\u09AE",
        "\xC1\xD4": "\u09AE\u09CD\u09B2",
        "\xCD\xF1": "\u09B2\u09CD\u0995",
        "\xD1": "\u09B2\u09CD\u0997",
        "\xCE\xA2": "\u09B2\u09CD\u09B8",
        "\xCE\xDD\xFE": "\u09B2\u09CD\u099F",
        "\xCE\xDD": "\u09B2\u09CD\u099F",
        "\xD3\xFE": "\u09B2\u09CD\u09A1",
        "\xD3": "\u201D",
        "\xD2": "\u201C",
        "\xCD\xB3\xFE": "\u09B2\u09CD\u09AB",
        "\xCD\xB3": "\u09B2\u09CD\u09AB",
        "\xCD\xBA": "\u09B2\u09CD\u09AC",
        "\xCD\xC3": "\u09B2\u09CD\u09AE",
        "\xCD\xD4": "\u09B2\u09CD\u09B2",
        "\xD6": "\u09B6\u09C1",
        "\xD8\xFE": "\u09B6\u09CD\u099A",
        "\xD8": "\u09B6\u09CD\u099A",
        "\xD9\u0160\xE9": "\u09B6\u09CD\u099B",
        "\xD9\u0160": "\u09B6\u09CD\u099B",
        "\xD9\xC0": "\u09B6\u09CD\u09A8",
        "\xD9\xBB": "\u09B6\u09CD\u09AC",
        "\xD9\xC2": "\u09B6\u09CD\u09AE",
        "\xD9\xD5": "\u09B6\u09CD\u09B2",
        "\xD7": "\u09B6\u09CD\u09B0",
        "\xDC\xF1": "\u09B7\u09CD\u0995",
        "\xDC;\xFE": "\u09B7\u09CD\u0995\u09CD\u09B0",
        "\xDC;": "\u09B7\u09CD\u0995\u09CD\u09B0",
        "\xDCT": "\u09B7\u09CD\u099F",
        "\xDB\xFE": "\u09B7\u09CD\u09A0",
        "\xDB": "\u09B7\u09CD\u09A0",
        "\xA1\u0152": "\u09B7\u09CD\u09A3",
        "\xDC\u2122": "\u09B7\u09CD\u09AA",
        "\xDC\xB3\xFE": "\u09B7\u09CD\u09AB",
        "\xDC\xB3": "\u09B7\u09CD\u09AB",
        "\xDC\xBF": "\u09B7\u09CD\u09AE",
        "\xDF\xFE\xF1": "\u09B8\u09CD\u0995",
        "\xDE\xDD\xFE": "\u09B8\u09CD\u099F",
        "\xDE\xDD": "\u09B8\u09CD\u099F",
        "\xDF\xFE<": "\u09B8\u09CD\u0996",
        "h\xDF\xFE": "\u09B8\u09CD\u09A4",
        "h\xDF": "\u09B8\u09CD\u09A4",
        "l\xDF\xFE": "\u09B8\u09CD\u09A4\u09C1",
        "l\xDF": "\u09B8\u09CD\u09A4\u09C1",
        "\xDF\xFEf": "\u09B8\u09CD\u09A4\u09CD\u09B0",
        "\xDF\xFEi": "\u09B8\u09CD\u09A5",
        "\xDF\xFE\xAC": "\u09B8\u09CD\u09A8",
        "\xDF\xFE\u2122": "\u09B8\u09CD\u09AA",
        "\xB2\xCC": "\u09AA\u09CD\u09B0",
        "\xDF\xFE\xB3\xFE": "\u09B8\u09CD\u09AB",
        "\xDF\xFE\xB3": "\u09B8\u09CD\u09AB",
        "\xDF\xFE\xBA": "\u09B8\u09CD\u09AC",
        "\xDF\xFE\xBF": "\u09B8\u09CD\u09AE",
        "\xDF\xFE\xD4": "\u09B8\u09CD\u09B2",
        "\xDF\xFE\xCB": "\u09B8\u09CD\u09B0",
        "\xFD": "\u09B9\u09C1",
        "\xE3": "\u09B9\u09CD\u09A3",
        "\xA3\xB9": "\u09B9\u09CD\u09AC",
        "\xA3\xAB": "\u09B9\u09CD\u09A8",
        "\xE1\xFE": "\u09B9\u09CD\u09AE",
        "\xE1": "\u09B9\u09CD\u09AE",
        "\xC1\xCB": "\u09AE\u09CD\u09B0",
        "\xE2": "\u09B9\u09CD\u09B2",
        "\xA3\\*": "\u09B9\u09C3",
        "X\u2020": "\u09DC\u09CD\u0997",
        "@\xF9\xCC": "\u0997\u09CD\u09B0",
        "\u20AC": "\u09B2\u09CD\u0997\u09C1",
        "=": "\u0997\u09C1",
        "\xC5": "\u09B0\u09CD",
        "xy": "\u0986",
        "x": "\u0985",
        "\xA3z": "\u0987",
        "{": "\u0988",
        "v\xFEz": "\u0989",
        "\\|": "\u098A",
        "}": "\u098B",
        "~": "\u098F",
        "\xFA": "\u0990",
        "\xE7": "\u0993",
        "\xE8": "\u0994",
        "Y": "\u09BC\u09C1",
        "\u201E\xFE": "\u0995",
        "\u201E": "\u0995",
        "\u2026": "\u0996",
        "\u2020": "\u0997",
        "\u2021": "\u0998",
        "\u02C6": "\u0999",
        "\u2030\xFE": "\u099A",
        "\u2030": "\u099A",
        "\u0160\xE9": "\u099B",
        "\u0160": "\u099B",
        "\u2039": "\u099C",
        "G\xFE": "\u099D",
        "G": "\u099D",
        "~\u0152": "\u099E",
        "\xDD\xFE": "\u099F",
        "\xDD": "\u099F",
        "\xE0\xFE": "\u09A0",
        "\xE0": "\u09A0",
        "v\xFE\xFC": "\u09DC",
        "v\xFE": "\u09A1",
        "v": "\u09A1",
        "\u2018\xFE\xFC": "\u09DD",
        "\u2018\xFE": "\u09A2",
        "\u2018": "\u2019",
        "\u2019": "\u2019",
        "\u201C\xFE": "\u09A4",
        "\u201C": "\u09A4",
        "\xED": "\u09A5",
        "\u201D": "\u09A6",
        "\u2022": "\u09A7",
        "\u02DC": "\u09A8",
        "\xFE\u2122": "\u09AA",
        "\u0161\xFE": "\u09AB",
        "\u0161": "\u09AB",
        "\xEE\xFB": "\u09B0",
        "\xEE": "\u09AC",
        "\xA6\xFE": "\u09AD",
        "\xA6": "\u09AD",
        "\u203A": "\u09AE",
        "\xEB\xFB": "\u09DF",
        "\xEB": "\u09AF",
        "\u0153": "\u09B2",
        "\u0178": "\u09B6",
        "\xA1\xEC": "\u09B7",
        "\xA2": "\u09AD",
        "\xA3": "\u09B9",
        "\xEA": "\u09CE",
        "\xFE": "",
        "\xE9": "",
        "y": "\u09BE",
        "!": "\u09BF",
        "#": "\u09C0",
        "%": "\u09C1",
        "\\)": "\u09C2",
        "\\(": "\u09C2",
        "&": "\u09C1",
        "\\$": "\u09C1",
        "\\*": "\u09C2",
        ",": "\u09C3",
        "\xF6\xEC": "\u09C7",
        "\xF6": "\u09C7",
        "\xF7\xEC": "\u09C8",
        "\xF7": "\u09C8",
        "\xEF": "\u09D7",
        "\xEC": "",
        "\xE6": "!",
        "S": "(",
        "V": ")",
        "\xA0": "*",
        "\u2013": ",",
        "\xE9\xF4\xE9": "-",
        "\xF4": "-",
        "\xD0": "\u0964",
        "\xAD": ":",
        "\u2014": ";",
        "\xDA": "?",
        "\xF2": "\u2018",
        "\xF3": "\u2019",
        "\u201A": "\u0982",
        "\u0192": "\u0983",
        "\xA4": "\u0981",
        "\xCA": "\u09CD\u09B0",
        "\xC6": "\u09CD\u09B0",
        "\xC8": "\u09CD\u09B0",
        "\xC9": "\u09CD\u09B0",
        "\xC4": "\u09CD\u09AF",
        "\xE4": "\u09CD",
        "|": "\u0964",
        "\\\\": "\u0965",
        "\xD4": "\u2019",
        "\xD5": "\u2019",
        "\xA2e": "\u09AD\u09CD\u09AC"
    };

    function compile(mapObj) {
        var keys = [];
        for (var k in mapObj) {
            keys.push(k);
        }
        keys.sort(function (a, b) {
            return b.length - a.length;
        });
        return {
            convert: function (str) {
                var s = str;
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    s = s.split(k).join(mapObj[k]);
                }
                return rearrange(s);
            }
        };
    }

    function isPreKar(c) { return c === "\u09BF" || c === "\u09C7" || c === "\u09C8"; }
    function isPostKar(c) { return c === "\u09BE" || c === "\u09C0" || c === "\u09C1" || c === "\u09C2" || c === "\u09C3" || c === "\u09CB" || c === "\u09CC" || c === "\u09D7"; }
    function isKar(c) { return isPreKar(c) || isPostKar(c); }
    function isPureConsonant(c) {
        if (!c) return false;
        var code = c.charCodeAt(0);
        return (code >= 0x0995 && code <= 0x09B9) || code === 0x09DC || code === 0x09DD || code === 0x09DF || code === 0x09CE;
    }
    function isHalant(c) { return c === "\u09CD"; }

    function rearrange(text) {
        var s = text;
        var i;

        // 1. Reph reordering: find "র" + "্" and shift backwards over preceding consonant cluster
        for (i = 0; i < s.length; i++) {
            if (i < s.length - 1 && s.charAt(i) === "\u09B0" && isHalant(s.charAt(i + 1)) && (i === 0 || !isHalant(s.charAt(i - 1)))) {
                var step = 1;
                while (i - step >= 0) {
                    var cur = s.charAt(i - step);
                    var prev = i - step - 1 >= 0 ? s.charAt(i - step - 1) : "";
                    if (isPureConsonant(cur) && isHalant(prev)) {
                        step += 2;
                    } else if (isKar(cur) || cur === "\u0981" || cur === "\u0982" || cur === "\u0983") {
                        step++;
                    } else if (isPureConsonant(cur)) {
                        step++;
                        break;
                    } else {
                        break;
                    }
                }
                if (step > 1) {
                    var targetIdx = i - step + 1;
                    var reph = s.substring(i, i + 2);
                    var cluster = s.substring(targetIdx, i);
                    var remainder = s.substring(i + 2);
                    s = s.substring(0, targetIdx) + reph + cluster + remainder;
                    i++;
                }
            }
        }

        // 2. Pre-Kar (ি, ে, ৈ) reordering
        for (i = 0; i < s.length; i++) {
            if (isPreKar(s.charAt(i)) && i < s.length - 1 && s.charAt(i + 1) !== " ") {
                var preKar = s.charAt(i);
                var step2 = 1;
                while (i + step2 < s.length && isPureConsonant(s.charAt(i + step2))) {
                    if (i + step2 + 1 < s.length && isHalant(s.charAt(i + step2 + 1))) {
                        step2 += 2;
                    } else {
                        step2 += 1;
                        break;
                    }
                }
                if (step2 > 1) {
                    var cluster2 = s.substring(i + 1, i + step2);
                    var extraKar = "";
                    var skip = 0;
                    var next1 = i + step2 < s.length ? s.charAt(i + step2) : "";
                    var next2 = i + step2 + 1 < s.length ? s.charAt(i + step2 + 1) : "";
                    if (preKar === "\u09C7" && next1 === "\u09BE") {
                        extraKar = "\u09CB";
                        skip = 1;
                    } else if (preKar === "\u09C7" && next1 === "\u0981" && next2 === "\u09BE") {
                        extraKar = "\u09CB\u0981";
                        skip = 2;
                    } else if (preKar === "\u09C7" && next1 === "\u09D7") {
                        extraKar = "\u09CC";
                        skip = 1;
                    } else if (preKar === "\u09C7" && next1 === "\u0981" && next2 === "\u09D7") {
                        extraKar = "\u09CC\u0981";
                        skip = 2;
                    } else {
                        extraKar = preKar;
                    }
                    s = s.substring(0, i) + cluster2 + extraKar + s.substring(i + step2 + skip);
                    i += (step2 - 1);
                }
            }
        }

        // 3. Chandrabindu and Modifier Canonicalization
        s = s.replace(/([\u0981\u0982\u0983])([\u09BE\u09BF\u09C0\u09C1\u09C2\u09C3\u09C7\u09C8\u09CB\u09CC\u09D7])/g, "$2$1");
        s = s.replace(/\u09C7([\u0981\u0982\u0983])\u09BE/g, "\u09CB$1");
        s = s.replace(/\u09C7([\u0981\u0982\u0983])\u09D7/g, "\u09CC$1");
        s = s.replace(/[\u200C\u200D]/g, "");
        s = s.replace(/\u09CD\u09CD+/g, "\u09CD");

        // 4. Refine Typist Typos: remove stray ampersands, duplicate viramas, etc.
        s = s.replace(/&{2,}/g, "");
        s = s.replace(/([\u0980-\u09FF])\s*&+\s*([\u0980-\u09FF])/g, "$1$2");
        s = s.replace(/([\u0980-\u09FF])\s*&+/g, "$1");
        s = s.replace(/&+\s*([\u0980-\u09FF])/g, "$1");

        // 5. Precomposed Nukta canonicalization
        s = s.replace(/\u09A1\u09BC/g, "\u09DC"); // ড + ় -> ড়
        s = s.replace(/\u09A2\u09BC/g, "\u09DD"); // ঢ + ় -> ঢ়
        s = s.replace(/\u09AF\u09BC/g, "\u09DF"); // য + ় -> য়

        // 6. Fix Unmapped ANSI residual tokens & ligatures
        // Sa + Ligatures (macron prefix: ¯' / ¯’ -> স্থ, ¯^ -> স্ব, ¯œ -> স্ন, ¯§ -> স্ম, ¯Í -> স্ত, ¯¿ -> স্ত্র)
        s = s.replace(/[\xAF¯][\x27'’‘”\"ʻʼ`]/g, "\u09B8\u09CD\u09A5"); // ¯' / ¯’ -> স্থ
        s = s.replace(/[\xAF¯][\^\\^]/g, "\u09B8\u09CD\u09AC");         // ¯^ -> স্ব
        s = s.replace(/[\xAF¯]œ/g, "\u09B8\u09CD\u09A8");               // ¯œ -> স্ন
        s = s.replace(/[\xAF¯]§/g, "\u09B8\u09CD\u09AE");               // ¯§ -> স্ম
        s = s.replace(/[\xAF¯]Í/g, "\u09B8\u09CD\u09A4");               // ¯Í -> স্ত
        s = s.replace(/[\xAF¯]¿/g, "\u09B8\u09CD\u09A4\u09CD\u09B0");   // ¯¿ -> স্ত্র
        s = s.replace(/[\xAF¯]\u2039/g, "\u09B8\u09CD\u0995");          // ¯‹ -> স্ক
        s = s.replace(/[\xAF¯]/g, "");                                  // orphan macron cleanup

        // Yen / Tma ligatures (¥ -> ত্ম)
        s = s.replace(/\u09A4?[\xA5¥]/g, "\u09A4\u09CD\u09AE");        // ত¥ or ¥ -> ত্ম
        s = s.replace(/আত¥ীয়/g, "\u0986\u09A4\u09CD\u09AE\u09C0\u09DF"); // আত¥ীয় -> আত্মীয়
        s = s.replace(/আত¥া/g, "\u0986\u09A4\u09CD\u09AE\u09BE");         // আত¥া -> আত্মা
        s = s.replace(/পরমাত¥া/g, "\u09AA\u09B0\u09AE\u09BE\u09A4\u09CD\u09AE\u09BE");
        s = s.replace(/মহাত¥া/g, "\u09AE\u09B9\u09BE\u09A4\u09CD\u09AE\u09BE");

        // Broken Ma-ligatures / Chumbon typo (চুম্-ন -> চুম্বন, চুম্^ন -> চুম্বন)
        s = s.replace(/চুম্[\-\^]ন/g, "\u099A\u09C1\u09AE\u09CD\u09AC\u09A8");
        s = s.replace(/চুম্[\-\^]নের/g, "\u099A\u09C1\u09AE\u09CD\u09AC\u09A8\u09C7\u09B0");
        s = s.replace(/চুম্[\-\^]নে/g, "\u099A\u09C1\u09AE\u09CD\u09AC\u09A8\u09C7");
        s = s.replace(/[\u09AE\u09AE\u09CD]্?[\-\^]([\u09AC\u09A8])/g, "\u09AE\u09CD\u09AC$1");

        // 7. Fix Apostrophe / Quote before Kar Transposition (e.g., ক’াবায় -> কা’বায়, ক’াবাকে -> কা’বাকে, দ’ুআ -> দু’আ)
        s = s.replace(/([\u0985-\u09B9\u09DC-\u09DF])([’\x27\"“”\u2018\u2019\u201C\u201D\u02BC\u02BB])([\u09BE-\u09CC\u09D7])/g, "$1$3$2");

        // 8. Duplicate Kars (typos like াা, িি, ুু, েে)
        s = s.replace(/\u09BE\u09BE+/g, "\u09BE");
        s = s.replace(/\u09BF\u09BF+/g, "\u09BF");
        s = s.replace(/\u09C0\u09C0+/g, "\u09C0");
        s = s.replace(/\u09C1\u09C1+/g, "\u09C1");
        s = s.replace(/\u09C2\u09C2+/g, "\u09C2");
        s = s.replace(/\u09C7\u09C7+/g, "\u09C7");

        // 9. Universal Orthography & Bijoy Misconversion Auto-Fixes
        // All forms of legacy ড়্গ / ড়্ঘ / ঢ়্গ -> ক্ষ (পরীক্ষা, লক্ষ্য, শিক্ষা, দক্ষতা, ইত্যাদি)
        s = s.replace(/([\u09DC\u09DD]|\u09A1\u09BC|\u09A2\u09BC)\u09CD?[\u0997\u0998]/g, "\u0995\u09CD\u09B7");
        
        // All forms of broken legacy রম্ন -> রু (জরুরত, গুরুত্ব, দ্রুত, ইত্যাদি)
        s = s.replace(/\u09B0\u09AE\u09CD[\u09B0\u09A8]\u09C1?/g, "\u09B0\u09C1");
        s = s.replace(/\u09B0\u09AE\u09CD[\u09B0\u09A8]/g, "\u09B0\u09C1");

        // Khanda-Ta fix: ত্ at end of word or before space/punctuation -> ৎ
        s = s.replace(/\u09A4\u09CD(?=[\s\.,;:!\?\"\x27\-\(\)\[\]\{\}\/\\।\n\r]|$)/g, "\u09CE");
        
        // Classic Book Typo Refinements
        s = s.replace(/\u0986\u09B2\u09B8\u09CD\u09A8\u09BE\u09B9/g, "\u0986\u09B2\u09CD\u09B2\u09BE\u09B9"); // আলস্নাহ -> আল্লাহ
        s = s.replace(/\u09B8\u09BE\u09B2\u09B8\u09CD\u09A8\u09BE\u09B2\u09B8\u09CD\u09A8\u09BE\u09B9\u09C1/g, "\u09B8\u09BE\u09B2\u09CD\u09B2\u09BE\u09B2\u09CD\u09B2\u09BE\u09B9\u09C1"); // সালস্নালস্নাহু -> সাল্লাল্লাহু
        s = s.replace(/\u09B8\u09BE\u09B2\u09B8\u09CD\u09A8\u09BE\u09AE/g, "\u09B8\u09BE\u09B2\u09CD\u09B2\u09BE\u09AE"); // সালস্নাম -> সাল্লাম
        s = s.replace(/\u0985\u09B6\u09BF\u09B8\u09CD\u09A8\u09B2\u09A4\u09BE/g, "\u0985\u09B6\u09CD\u09B2\u09C0\u09B2\u09A4\u09BE"); // অশিস্নলতা -> অশ্লীলতা
        s = s.replace(/\u0985\u09B8\u09CD\u09A8\u09C0\u09B2\u09A4\u09BE/g, "\u0985\u09B6\u09CD\u09B2\u09C0\u09B2\u09A4\u09BE"); // অসস্নীলতা -> অশ্লীলতা
        s = s.replace(/\u0985\u09B8\u09CD\u09B2\u09C0\u09B2\u09A4\u09BE/g, "\u0985\u09B6\u09CD\u09B2\u09C0\u09B2\u09A4\u09BE"); // অস্লীলতা -> অশ্লীলতা
        s = s.replace(/\u0987\u09B8\u09CD\u09A8\u09BE\u09AE/g, "\u0987\u09B8\u09B2\u09BE\u09AE"); // ইস্নাম -> ইসলাম
        s = s.replace(/\u09AE\u09C1\u09B8\u09CD\u09B2\u09BF\u09AE/g, "\u09AE\u09C1\u09B8\u09B2\u09BF\u09AE"); // মুস্লিম -> মুসলিম
        s = s.replace(/\u09B8\u0982\u09B0\u09CD\u09B8\u09CD\u09AA\u09C7/g, "\u09B8\u0982\u09B8\u09CD\u09AA\u09B0\u09CD\u09B6\u09C7"); // সংর্স্পে -> সংস্পর্শে
        s = s.replace(/\u09B8\u0982\u09B0\u09CD\u09B8\u09CD\u09AA/g, "\u09B8\u0982\u09B8\u09CD\u09AA\u09B0\u09CD\u09B6"); // সংর্স্প -> সংস্পর্শ
        s = s.replace(/\u099C\u09C0\u09AC\u09A6\u09CD\u09AC\u09B6\u09BE\u09DF/g, "\u099C\u09C0\u09AC\u09A6\u09CD\u09A6\u09B6\u09BE\u09DF"); // জীবদ্বশায় -> জীবদ্দশায়
        s = s.replace(/\u0985\u09A7\u09BF\u09A8\u09B8\u09CD\u09A4/g, "\u0985\u09A7\u09C0\u09A8\u09B8\u09CD\u09A5"); // অধিনস্ত -> অধীনস্থ
        s = s.replace(/\u09B8\u09B0\u09CD\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF/g, "\u09B8\u09B0\u09CD\u09AC\u09BE\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF"); // সর্বস্থায় -> সর্বাবস্থায়
        
        // Common Typist Loan-Word & Spelling Auto-Fixes
        s = s.replace(/দ[’\x27\u2018\u2019]আ/g, "দু’আ"); // দ’আ -> দু’আ
        s = s.replace(/ক[’\x27\u2018\u2019]াবা/g, "কা’বা"); // ক’াবা -> কা’বা
        s = s.replace(/অব[’\x27\u2018\u2019]ায়/g, "অবস্থায়");
        s = s.replace(/অব¯’ায়/g, "অবস্থায়");
        s = s.replace(/আক্রোমণ/g, "আক্রমণ");
        s = s.replace(/মূহূর্ত/g, "মুহূর্ত");
        s = s.replace(/মূহুর্ত/g, "মুহূর্ত");
        s = s.replace(/মুখরীত/g, "মুখরিত");
        s = s.replace(/ব্যতিত/g, "ব্যতীত");
        s = s.replace(/সংগৃহিত/g, "সংগৃহীত");

        // 10. Halant and diacritic cleanup
        s = s.replace(/\u09CD\u09CD+/g, "\u09CD");
        s = s.replace(/\u09CD+(?=[\s\.,;:!\?\"\x27\-\(\)\[\]\{\}\/\\।\n\r]|$)/g, "");
        s = s.replace(/([\u09BE-\u09CC\u09D7])\u09CD+/g, "$1");

        return s;
    }

    
    function refineUnicodeText(s) {
        if (!s) return "";
        // 1. Broken word specific fixes BEFORE any general regex
        s = s.replace(/অব[’\x27\u2018\u2019\u02BC\u02BB]?[◌\u25CC]?ায়/g, "অবস্থায়");
        s = s.replace(/অব[¯\xAF][’\x27\u2018\u2019\u02BC\u02BB]?ায়/g, "অবস্থায়");
        s = s.replace(/অব[¯\xAF]ায়/g, "অবস্থায়");
        s = s.replace(/অবা[’\x27\u2018\u2019\u02BC\u02BB]য়/g, "অবস্থায়");

        // 2. Ma-ligature (ম্ব / ম্ন) unmapped and broken typist forms
        s = s.replace(/গ[¤\xA4][\^\\^]?[◌\u25CC]?ু?জ/g, "গম্বুজ");
        s = s.replace(/গম্ব[◌\u25CC]ুজ/g, "গম্বুজ");
        s = s.replace(/অবল[¤\xA4][\^\\^]?[◌\u25CC]?ন/g, "অবলম্বন");
        s = s.replace(/নিম্[\-\^]ন/g, "নিম্ন");
        s = s.replace(/নিম্[\-\^]নোক্ত/g, "নিম্নোক্ত");
        s = s.replace(/নিম্[\-\^]নলিখিত/g, "নিম্নলিখিত");
        s = s.replace(/নিম্[\-\^]নরূপ/g, "নিম্নরূপ");
        s = s.replace(/নিম্[\-\^]নবর্ণিত/g, "নিম্নবর্ণিত");
        s = s.replace(/চুম্[\-\^]ন/g, "চুম্বন");
        s = s.replace(/চুম্[\-\^]নের/g, "চুম্বনের");
        s = s.replace(/চুম্[\-\^]নে/g, "চুম্বনে");
        s = s.replace(/মাথা\s+মু[\-\^]য়ে/g, "মাথা মুড়িয়ে");
        s = s.replace(/মু[\-\^]য়ে/g, "মুড়িয়ে");
        s = s.replace(/ল[¤\xA4][\^\\^]?[◌\u25CC]?া/g, "লম্বা");
        s = s.replace(/ক[¤\xA4][\^\\^]?[◌\u25CC]?ল/g, "কম্বল");
        s = s.replace(/দ[¤\xA4][\^\\^]?[◌\u25CC]?/g, "দম্ভ");
        s = s.replace(/স[¤\xA4][\^\\^]?[◌\u25CC]?ল/g, "সম্বল");
        s = s.replace(/[¤\xA4][\^\\^]/g, "\u09AE\u09CD\u09AC");
        s = s.replace(/[¤\xA4]/g, "\u09AE\u09CD");

        // 3. Unmapped ANSI ligatures
        s = s.replace(/[\xAF¯][\x27'’‘”\"ʻʼ`]/g, "\u09B8\u09CD\u09A5"); // ¯' / ¯’ -> স্থ
        s = s.replace(/[\xAF¯][\^\\^]/g, "\u09B8\u09CD\u09AC");         // ¯^ -> স্ব
        s = s.replace(/[\xAF¯]œ/g, "\u09B8\u09CD\u09A8");               // ¯œ -> স্ন
        s = s.replace(/[\xAF¯]§/g, "\u09B8\u09CD\u09AE");               // ¯§ -> স্ম
        s = s.replace(/[\xAF¯]Í/g, "\u09B8\u09CD\u09A4");               // ¯Í -> স্ত
        s = s.replace(/[\xAF¯]¿/g, "\u09B8\u09CD\u09A4\u09CD\u09B0");   // ¯¿ -> স্ত্র
        s = s.replace(/[\xAF¯]\u2039/g, "\u09B8\u09CD\u0995");          // ¯‹ -> স্ক
        s = s.replace(/[\xAF¯]/g, "");

        // 4. Yen / Tma fix
        s = s.replace(/আত[¥\xA5][◌\u25CC]?ীয়/g, "\u0986\u09A4\u09CD\u09AE\u09C0\u09DF");
        s = s.replace(/আত[¥\xA5][◌\u25CC]?া/g, "\u0986\u09A4\u09CD\u09AE\u09BE");
        s = s.replace(/ত?[¥\xA5][◌\u25CC]?/g, "\u09A4\u09CD\u09AE");

        // 5. Loan-word apostrophe fixes
        s = s.replace(/তাঁ['’]র/g, "তাঁর");
        s = s.replace(/দ[’\x27\u2018\u2019][◌\u25CC]?ু?আ/g, "দু’আ");
        s = s.replace(/ক[’\x27\u2018\u2019][◌\u25CC]?া?বা/g, "কা’বা");
        s = s.replace(/মূহূর্ত/g, "মুহূর্ত");
        s = s.replace(/মূহুর্ত/g, "মুহূর্ত");
        s = s.replace(/ব্যতিত/g, "ব্যতীত");
        s = s.replace(/সংগৃহিত/g, "সংগৃহীত");

        // 6. Dotted Circle & Quote Transposition
        s = s.replace(/([\u0985-\u09B9\u09DC-\u09DF])([’\x27\"“”\u2018\u2019\u201C\u201D\u02BC\u02BB])([\u09BE-\u09CC\u09D7])/g, "$1$3$2");

        // 7. Remove any leftover dotted circles
        s = s.replace(/[\u25CC◌]/g, "");

        return s;
    }

    function isMostlyUnicode(str) {
        if (!str) return false;
        var bengaliCount = (str.match(/[\u0980-\u09FF]/g) || []).length;
        var asciiCount = (str.match(/[a-zA-Z0-9\x80-\xFF]/g) || []).length;
        return bengaliCount > 10 && bengaliCount > asciiCount;
    }

    function evaluateBengali(str) {
        var score = 0;
        var unmappedMatch = str.match(/[\x80-\xFF\u2018\u2019\u201C\u201D\u2022\u02DC\u2122\u0161\u00AF\u2014\u0152\u2039\u2212\u0160\u0153\u201E\u2026]/g);
        if (unmappedMatch) {
            score -= unmappedMatch.length * 15;
        }
        if (str.indexOf("\u09B0\u09AE\u09CD\u09A8") !== -1) score -= 20;
        if (str.indexOf("\u09CD\u09CD") !== -1) score -= 30;

        var bMatch = str.match(/[\u0980-\u09FF]/g);
        if (bMatch) {
            score += bMatch.length;
        }
        return score;
    }

    var engineV1 = compile(rawMapV1);
    var engineV2 = compile(rawMapV2);
    var engineV3 = compile(rawMapV3);

    function convert(input) {
        if (!input) return "";
        if (isMostlyUnicode(input)) {
            return refineUnicodeText(input);
        }
        var res1 = refineUnicodeText(engineV1.convert(input));
        var res2 = refineUnicodeText(engineV2.convert(input));
        var res3 = refineUnicodeText(engineV3.convert(input));
        
        var score1 = evaluateBengali(res1);
        var score2 = evaluateBengali(res2);
        var score3 = evaluateBengali(res3);

        if (score3 > score1 && score3 > score2) return res3;
        if (score2 >= score1) return res2;
        return res1;
    }

    return {
        convert: convert,
        convertV1: function(str) { return isMostlyUnicode(str) ? refineUnicodeText(str) : refineUnicodeText(engineV1.convert(str)); },
        convertV2: function(str) { return isMostlyUnicode(str) ? refineUnicodeText(str) : refineUnicodeText(engineV2.convert(str)); },
        convertV3: function(str) { return isMostlyUnicode(str) ? refineUnicodeText(str) : refineUnicodeText(engineV3.convert(str)); }
    };
})();

function _findFontByName(fontName) {
    if (!fontName || fontName === "keep" || fontName === "none") return null;

    var aliases = {
        "siyamrupali": ["SiyamRupali", "Siyam Rupali", "SiyamRupali-Regular", "SiyamRupaliANSI"],
        "kalpurush": ["Kalpurush", "Kalpurush-Regular", "KalpurushANSI"],
        "solaimanlipi": ["SolaimanLipiNormal", "SolaimanLipi-Bold", "SolaimanLipi", "Solaiman Lipi"],
        "nikosh": ["Nikosh", "NikoshBAN", "Nikosh-Regular", "NikoshLight"],
        "adorsholipi": ["AdorshoLipi", "AdorshoLipi-Regular"],
        "notoserifbengali": ["NotoSerifBengali", "NotoSerifBengali-Regular", "NotoSerifBengali-Bold"],
        "notosansbengali": ["NotoSansBengali", "NotoSansBengali-Regular", "NotoSansBengali-Bold"],
        "bornomala": ["Bornomala-Regular", "Bornomala-Bold", "Bornomala", "Bornomala Regular"],
        "bornomala-regular": ["Bornomala-Regular", "Bornomala", "Bornomala Regular"],
        "bornomala-bold": ["Bornomala-Bold", "Bornomala Bold"]
    };

    var key = fontName.toLowerCase().replace(/[-_\s]/g, "");
    var candidates = [fontName];
    if (aliases[key]) {
        candidates = candidates.concat(aliases[key]);
    }

    // 1. Direct getByName test for each candidate
    for (var c = 0; c < candidates.length; c++) {
        try {
            var fDirect = app.textFonts.getByName(candidates[c]);
            if (fDirect) return fDirect;
        } catch (eDirect) {}
    }

    // 2. Safe iterative search with try-catch around every single property access (avoids GFKU crash)
    try {
        var totalFonts = app.textFonts.length;
        for (var i = 0; i < totalFonts; i++) {
            var f = null;
            try { f = app.textFonts[i]; } catch (eF) { continue; }
            if (!f) continue;

            var fName = "";
            var fFam = "";
            var fPost = "";
            try { fName = f.name; } catch (eN) {}
            try { fFam = f.family; } catch (eFam) {}
            try { fPost = f.postScriptName; } catch (eP) {}

            var combined = (fName + " " + fFam + " " + fPost).toLowerCase().replace(/[-_\s]/g, "");
            if (combined.indexOf(key) !== -1) {
                return f;
            }
        }
    } catch (eLoop) {}

    return null;
}

function _collectFrames(scope, doc) {
    var result = [];
    var seen = {};

    function addFrame(tf) {
        if (!tf) return;
        try {
            var id = tf.uuid || tf.id || (tf.contents ? tf.contents.substring(0, 10) + "_" + tf.left + "_" + tf.top : null) || ("tf_" + result.length);
            if (!seen[id]) {
                seen[id] = true;
                result.push(tf);
            }
        } catch (e) {
            result.push(tf);
        }
    }

    function traverse(item) {
        if (!item) return;
        if (item.typename === "TextFrame") {
            addFrame(item);
        } else if (item.typename === "TextRange") {
            try {
                if (item.story && item.story.textFrames) {
                    for (var st = 0; st < item.story.textFrames.length; st++) {
                        addFrame(item.story.textFrames[st]);
                    }
                } else if (item.parent && item.parent.typename === "TextFrame") {
                    addFrame(item.parent);
                }
            } catch (eTR) {}
        } else if (item.typename === "GroupItem") {
            try {
                for (var g = 0; g < item.pageItems.length; g++) {
                    traverse(item.pageItems[g]);
                }
            } catch (eG) {}
        } else if (item.pageItems && item.pageItems.length > 0) {
            try {
                for (var p = 0; p < item.pageItems.length; p++) {
                    traverse(item.pageItems[p]);
                }
            } catch (eP) {}
        }
    }

    var hasSelection = (doc.selection && doc.selection.length > 0);

    if (scope === "selected") {
        if (hasSelection) {
            for (var s = 0; s < doc.selection.length; s++) {
                traverse(doc.selection[s]);
            }
        }
        return result;
    }

    for (var tf = 0; tf < doc.textFrames.length; tf++) {
        addFrame(doc.textFrames[tf]);
    }
    return result;
}

function convertDocText(scope, version, targetFontName) {
    try {
        if (app.documents.length === 0) {
            return "ERROR: No active document open in Illustrator.";
        }

        var doc = app.activeDocument;
        var frames = _collectFrames(scope || "selected", doc);

        if (frames.length === 0) {
            if (scope === "selected") {
                return "ERROR: No text frame selected! Please select the text frame(s) you want to convert.";
            } else {
                return "ERROR: No text frames found in document.";
            }
        }

        var targetFont = null;
        if (targetFontName && targetFontName !== "keep" && targetFontName !== "none") {
            targetFont = _findFontByName(targetFontName);
        }

        var convertedCount = 0;
        for (var i = 0; i < frames.length; i++) {
            var item = frames[i];
            if (item.typename === "TextFrame") {
                var originalText = item.contents;
                if (originalText && originalText.length > 0) {
                    var unicodeText = "";
                    if (version === "v1") {
                        unicodeText = Bijoy2UnicodeEngine.convertV1(originalText);
                    } else if (version === "v2") {
                        unicodeText = Bijoy2UnicodeEngine.convertV2(originalText);
                    } else if (version === "v3") {
                        unicodeText = Bijoy2UnicodeEngine.convertV3(originalText);
                    } else {
                        unicodeText = Bijoy2UnicodeEngine.convert(originalText);
                    }

                                        item.contents = unicodeText;
                    if (targetFont) {
                        try { item.textRange.characterAttributes.textFont = targetFont; } catch (eFont1) {}
                        try { item.story.textRange.characterAttributes.textFont = targetFont; } catch (eFont2) {}
                        try {
                            for (var p = 0; p < item.paragraphs.length; p++) {
                                item.paragraphs[p].characterAttributes.textFont = targetFont;
                            }
                        } catch (eFont3) {}
                    }
                    convertedCount++;
                }
            }
        }

        return "SUCCESS:" + convertedCount;
    } catch (err) {
        return "ERROR: " + err.toString();
    }
}
