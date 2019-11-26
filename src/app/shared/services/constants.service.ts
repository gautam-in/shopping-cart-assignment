import { Injectable } from '@angular/core';


/****
 * Quantifiers specify how often the preceding regular expression should match.
 * ? the question mark is the match-zero-or-one quantifier
 * . the dot matches any character except the newline symbol.
 * 
 *  Example: ".a" matches two consecutive characters where the last one is "a".
    Example: ".*\.txt$" matches all strings that end in ".txt".

 * * the asterisk is the match-zero-or-more quantifier.(Example: "(ab)c*" matches "ab" followed by zero or more "c"s, i.e., "ab", "abc", "abcc", "abccc" ...)
 * + the plus sign is the match-one-or-more quantifier.(Example: "(ab)c+" matches "ab" followed by one or more "c"s, i.e., "abc", "abcc", "abccc" ...)
 * ^ the caret is the anchor for the start of the string, or the negation symbol.
     Example: "^a" matches "a" at the start of the string.
     Example: "[^0-9]" matches any non digit.
 * $ the dollar sign is the anchor for the end of the string.
     Example: "b$" matches a "b" at the end of a line.
     Example: "^$" matches the empty string.
 * { } the opening and closing curly brackets are used as range quantifiers.
    Example: "a{2,3}" matches "aa" or "aaa".
 *  [ ] the opening and closing square brackets define a character class to match a single character.
 *  Example: "[d-f]" is the same as "[def]" and matches "d", "e" or "f".
 *  Example: "[a-z]" matches any lower-case characters in the alphabet.
    Example: "[^0-9]" matches any character that is not an ASCII digit.
    Example: A search for "[][()?<>$^.*?^]" in the string "[]()?<>$^.*?^" followed by a replace string "r" has the result "rrrrrrrrrrrrr". Here the search string is one character class and all the meta characters are interpreted as ordinary characters without the need to escape them.

    ( ) the opening and closing parenthes3s are used for grouping characters (or other regexes).
    Example: "(ab)\1" matches "abab".

    * the asterisk is the match-zero-or-more quantifier.
    Example: "^.*$" matches an entire line.


    | the vertical pipe separates a series of alternatives.
    Example: "(a|b|c)a" matches "aa" or "ba" or "ca".

    < > the smaller and greater signs are anchors that specify a left or right word boundary.

    - the minus sign indicates a range in a character class (when it is not at the first position after the "[" opening bracket or the last position before the "]" closing bracket.
    Example: "[A-Z]" matches any uppercase character.
    Example: "[A-Z-]" or "[-A-Z]" match any uppercase character or "-".

    & the ampersand is the "substitute complete match" symbol.
 */

@Injectable()
export class ConstantsService{
    readonly baseAppUrl: string = 'http://localhost:3000/';
    readonly VALID_EMAIL: RegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    readonly VALID_PASSWORD : RegExp = /^(((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[\s]))|((?=.*[a-z])(?=.*[0-9])(?!.*[\s]))|((?=.*[A-Z])(?=.*[0-9])(?!.*[\s])))(?=.{6,20})/;
    readonly VALID_NAME:  RegExp = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
}