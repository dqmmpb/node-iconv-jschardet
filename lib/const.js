"use strict";
/**
 * Created by user on 2019/3/21.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CODEC_DATA_NAME;
(function (CODEC_DATA_NAME) {
    CODEC_DATA_NAME["BIG5"] = "Big5";
    CODEC_DATA_NAME["GBK"] = "GBK";
    CODEC_DATA_NAME["GB2312"] = "GB2312";
    CODEC_DATA_NAME["UTF_16_LE"] = "UTF-16LE";
    CODEC_DATA_NAME["UTF_16_BE"] = "UTF-16BE";
    CODEC_DATA_NAME["EUC_JP"] = "EUC-JP";
    CODEC_DATA_NAME["SHIFT_JIS"] = "SHIFT_JIS";
    CODEC_DATA_NAME["ASCII"] = "ASCII";
    CODEC_DATA_NAME["UTF_8"] = "UTF-8";
    CODEC_DATA_NAME["UTF_32_LE"] = "UTF-32LE";
    CODEC_DATA_NAME["UTF_32_BE"] = "UTF-32BE";
})(CODEC_DATA_NAME = exports.CODEC_DATA_NAME || (exports.CODEC_DATA_NAME = {}));
var CODEC_DATA_NAME_TO_UPPER_CASE;
(function (CODEC_DATA_NAME_TO_UPPER_CASE) {
    CODEC_DATA_NAME_TO_UPPER_CASE["BIG5"] = "BIG5";
    CODEC_DATA_NAME_TO_UPPER_CASE["GBK"] = "GBK";
    CODEC_DATA_NAME_TO_UPPER_CASE["GB2312"] = "GB2312";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_16_LE"] = "UTF-16LE";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_16_BE"] = "UTF-16BE";
    CODEC_DATA_NAME_TO_UPPER_CASE["EUC_JP"] = "EUC-JP";
    CODEC_DATA_NAME_TO_UPPER_CASE["SHIFT_JIS"] = "SHIFT_JIS";
    CODEC_DATA_NAME_TO_UPPER_CASE["ASCII"] = "ASCII";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_8"] = "UTF-8";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_32_LE"] = "UTF-32LE";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_32_BE"] = "UTF-32BE";
})(CODEC_DATA_NAME_TO_UPPER_CASE = exports.CODEC_DATA_NAME_TO_UPPER_CASE || (exports.CODEC_DATA_NAME_TO_UPPER_CASE = {}));
var CODEC_DATA_ENCODING_ID;
(function (CODEC_DATA_ENCODING_ID) {
    CODEC_DATA_ENCODING_ID["big5hkscs"] = "big5hkscs";
    CODEC_DATA_ENCODING_ID["cp936"] = "cp936";
    CODEC_DATA_ENCODING_ID["gbk"] = "gbk";
    CODEC_DATA_ENCODING_ID["eucjp"] = "eucjp";
    CODEC_DATA_ENCODING_ID["shiftjis"] = "shiftjis";
    CODEC_DATA_ENCODING_ID["utf8"] = "utf8";
    CODEC_DATA_ENCODING_ID["ucs2"] = "ucs2";
    CODEC_DATA_ENCODING_ID["utf16be"] = "utf16be";
    CODEC_DATA_ENCODING_ID["utf32be"] = "utf32be";
    CODEC_DATA_ENCODING_ID["utf32le"] = "utf32le";
    // ------------
    CODEC_DATA_ENCODING_ID["GBK"] = "gbk";
    CODEC_DATA_ENCODING_ID["EUC_JP"] = "eucjp";
    CODEC_DATA_ENCODING_ID["SHIFT_JIS"] = "shiftjis";
    CODEC_DATA_ENCODING_ID["UTF_8"] = "utf8";
    CODEC_DATA_ENCODING_ID["UTF_16_BE"] = "utf16be";
    CODEC_DATA_ENCODING_ID["UTF_32_LE"] = "utf32le";
    CODEC_DATA_ENCODING_ID["UTF_32_BE"] = "utf32be";
    // ----------
    CODEC_DATA_ENCODING_ID["ascii"] = "ascii";
    CODEC_DATA_ENCODING_ID["ASCII"] = "ASCII";
})(CODEC_DATA_ENCODING_ID = exports.CODEC_DATA_ENCODING_ID || (exports.CODEC_DATA_ENCODING_ID = {}));
var ENUM_NODE_ENCODING;
(function (ENUM_NODE_ENCODING) {
    ENUM_NODE_ENCODING["ASCII"] = "ascii";
    ENUM_NODE_ENCODING["UTF8"] = "utf8";
    ENUM_NODE_ENCODING["UTF_8"] = "utf-8";
    ENUM_NODE_ENCODING["UTF16_LE"] = "utf16le";
    ENUM_NODE_ENCODING["UCS2"] = "ucs2";
    ENUM_NODE_ENCODING["BASE64"] = "base64";
    ENUM_NODE_ENCODING["LATIN1"] = "latin1";
    ENUM_NODE_ENCODING["BINARY"] = "binary";
    ENUM_NODE_ENCODING["HEX"] = "hex";
})(ENUM_NODE_ENCODING = exports.ENUM_NODE_ENCODING || (exports.ENUM_NODE_ENCODING = {}));
exports.NodeEncoding = [
    "ascii" /* ASCII */,
    "utf8" /* UTF8 */,
    "utf-8" /* UTF_8 */,
    "utf16le" /* UTF16_LE */,
    "ucs2" /* UCS2 */,
    "base64" /* BASE64 */,
    "latin1" /* LATIN1 */,
    "binary" /* BINARY */,
    "hex" /* HEX */,
];
exports.codec_table = {
    ["big5hkscs" /* big5hkscs */]: _codecTable({
        id: 'big5',
        name: "Big5" /* BIG5 */,
    }),
    ["cp936" /* cp936 */]: _codecTable({
        name: "GB2312" /* GB2312 */,
    }),
    ["gbk" /* gbk */]: _codecTable({
        name: "GBK" /* GBK */,
    }),
    ["eucjp" /* eucjp */]: _codecTable({
        name: "EUC-JP" /* EUC_JP */,
    }),
    ["shiftjis" /* shiftjis */]: _codecTable({
        name: "SHIFT_JIS" /* SHIFT_JIS */,
    }),
    //------------------
    ["utf8" /* utf8 */]: _codecTable({
        name: "UTF-8" /* UTF_8 */,
    }),
    ["ucs2" /* ucs2 */]: _codecTable({
        name: "UTF-16LE" /* UTF_16_LE */,
    }),
    //------------------
    ["utf16be" /* utf16be */]: _codecTable({
        name: "UTF-16BE" /* UTF_16_BE */,
    }),
    /**
     * Error: Encoding not recognized: '' (searched as: '')
     */
    ["utf32be" /* utf32be */]: _codecTable({
        name: "UTF-32BE" /* UTF_32_BE */,
        not: true,
    }),
    ["utf32le" /* utf32le */]: _codecTable({
        name: "UTF-32LE" /* UTF_32_LE */,
        not: true,
    }),
};
var EnumEncoding;
(function (EnumEncoding) {
    EnumEncoding["BIG5"] = "Big5";
    EnumEncoding["UTF8"] = "UTF-8";
    EnumEncoding["GBK"] = "Gbk";
})(EnumEncoding = exports.EnumEncoding || (exports.EnumEncoding = {}));
function codecDataNameToUpperCase(key) {
    return key.toUpperCase();
}
exports.codecDataNameToUpperCase = codecDataNameToUpperCase;
function _codecTable(data) {
    return data;
}
exports._codecTable = _codecTable;
function _enc(encoding) {
    if (encoding == null) {
        throw new Error(`encoding '${encoding}' is broken`);
    }
    return encoding
        .toString()
        .toLowerCase()
        .replace(/[^0-9a-z]|:\d{4}$/g, '');
}
exports._enc = _enc;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsSUFBa0IsZUFjakI7QUFkRCxXQUFrQixlQUFlO0lBRWhDLGdDQUFhLENBQUE7SUFDYiw4QkFBVyxDQUFBO0lBQ1gsb0NBQWlCLENBQUE7SUFDakIseUNBQXNCLENBQUE7SUFDdEIseUNBQXNCLENBQUE7SUFDdEIsb0NBQWlCLENBQUE7SUFDakIsMENBQXVCLENBQUE7SUFDdkIsa0NBQWUsQ0FBQTtJQUNmLGtDQUFlLENBQUE7SUFFZix5Q0FBc0IsQ0FBQTtJQUN0Qix5Q0FBc0IsQ0FBQTtBQUN2QixDQUFDLEVBZGlCLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBY2hDO0FBRUQsSUFBa0IsNkJBY2pCO0FBZEQsV0FBa0IsNkJBQTZCO0lBRTlDLDhDQUFhLENBQUE7SUFDYiw0Q0FBVyxDQUFBO0lBQ1gsa0RBQWlCLENBQUE7SUFDakIsdURBQXNCLENBQUE7SUFDdEIsdURBQXNCLENBQUE7SUFDdEIsa0RBQWlCLENBQUE7SUFDakIsd0RBQXVCLENBQUE7SUFDdkIsZ0RBQWUsQ0FBQTtJQUNmLGdEQUFlLENBQUE7SUFFZix1REFBc0IsQ0FBQTtJQUN0Qix1REFBc0IsQ0FBQTtBQUN2QixDQUFDLEVBZGlCLDZCQUE2QixHQUE3QixxQ0FBNkIsS0FBN0IscUNBQTZCLFFBYzlDO0FBRUQsSUFBa0Isc0JBZ0NqQjtBQWhDRCxXQUFrQixzQkFBc0I7SUFFdkMsaURBQXVCLENBQUE7SUFDdkIseUNBQWUsQ0FBQTtJQUNmLHFDQUFXLENBQUE7SUFDWCx5Q0FBZSxDQUFBO0lBQ2YsK0NBQXFCLENBQUE7SUFDckIsdUNBQWEsQ0FBQTtJQUNiLHVDQUFhLENBQUE7SUFDYiw2Q0FBbUIsQ0FBQTtJQUNuQiw2Q0FBbUIsQ0FBQTtJQUNuQiw2Q0FBbUIsQ0FBQTtJQUVuQixlQUFlO0lBRWYscUNBQVcsQ0FBQTtJQUVYLDBDQUFnQixDQUFBO0lBRWhCLGdEQUFzQixDQUFBO0lBRXRCLHdDQUFjLENBQUE7SUFFZCwrQ0FBcUIsQ0FBQTtJQUVyQiwrQ0FBcUIsQ0FBQTtJQUNyQiwrQ0FBcUIsQ0FBQTtJQUVyQixhQUFhO0lBRWIseUNBQWUsQ0FBQTtJQUNmLHlDQUFlLENBQUE7QUFDaEIsQ0FBQyxFQWhDaUIsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFnQ3ZDO0FBdURELElBQWtCLGtCQWdCakI7QUFoQkQsV0FBa0Isa0JBQWtCO0lBRW5DLHFDQUFlLENBQUE7SUFFZixtQ0FBYSxDQUFBO0lBQ2IscUNBQWUsQ0FBQTtJQUVmLDBDQUFvQixDQUFBO0lBQ3BCLG1DQUFhLENBQUE7SUFFYix1Q0FBaUIsQ0FBQTtJQUVqQix1Q0FBaUIsQ0FBQTtJQUNqQix1Q0FBaUIsQ0FBQTtJQUVqQixpQ0FBVyxDQUFBO0FBQ1osQ0FBQyxFQWhCaUIsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFnQm5DO0FBRVksUUFBQSxZQUFZLEdBQXlCOzs7Ozs7Ozs7O0NBZWpELENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBd0I7SUFDL0MsNkJBQWtDLEVBQUUsV0FBVyxDQUFDO1FBQy9DLEVBQUUsRUFBRSxNQUFNO1FBQ1YsSUFBSSxtQkFBc0I7S0FDakIsQ0FBQztJQUNYLHFCQUE4QixFQUFFLFdBQVcsQ0FBQztRQUMzQyxJQUFJLHVCQUF3QjtLQUNuQixDQUFDO0lBRVgsaUJBQTRCLEVBQUUsV0FBVyxDQUFDO1FBQ3pDLElBQUksaUJBQXFCO0tBQ2hCLENBQUM7SUFFWCxxQkFBOEIsRUFBRSxXQUFXLENBQUM7UUFDM0MsSUFBSSx1QkFBd0I7S0FDbkIsQ0FBQztJQUNYLDJCQUFpQyxFQUFFLFdBQVcsQ0FBQztRQUM5QyxJQUFJLDZCQUEyQjtLQUN0QixDQUFDO0lBRVgsb0JBQW9CO0lBRXBCLG1CQUE2QixFQUFFLFdBQVcsQ0FBQztRQUMxQyxJQUFJLHFCQUF1QjtLQUNsQixDQUFDO0lBQ1gsbUJBQTZCLEVBQUUsV0FBVyxDQUFDO1FBQzFDLElBQUksNEJBQTJCO0tBQ3RCLENBQUM7SUFFWCxvQkFBb0I7SUFFcEIseUJBQWdDLEVBQUUsV0FBVyxDQUFDO1FBQzdDLElBQUksNEJBQTJCO0tBQ3RCLENBQUM7SUFFWDs7T0FFRztJQUNILHlCQUFnQyxFQUFFLFdBQVcsQ0FBQztRQUM3QyxJQUFJLDRCQUEyQjtRQUMvQixHQUFHLEVBQUUsSUFBSTtLQUNBLENBQUM7SUFDWCx5QkFBZ0MsRUFBRSxXQUFXLENBQUM7UUFDN0MsSUFBSSw0QkFBMkI7UUFDL0IsR0FBRyxFQUFFLElBQUk7S0FDQSxDQUFDO0NBQ1gsQ0FBQztBQUVGLElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUV2Qiw2QkFBYSxDQUFBO0lBQ2IsOEJBQWMsQ0FBQTtJQUNkLDJCQUFXLENBQUE7QUFDWixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFlRCxTQUFnQix3QkFBd0IsQ0FBQyxHQUF3QjtJQUVoRSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUN6QixDQUFDO0FBSEQsNERBR0M7QUFFRCxTQUFnQixXQUFXLENBQW9DLElBQU87SUFFckUsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBSEQsa0NBR0M7QUFVRCxTQUFnQixJQUFJLENBQUMsUUFBdUY7SUFFM0csSUFBSSxRQUFRLElBQUksSUFBSSxFQUNwQjtRQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxRQUFRLGFBQWEsQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsT0FBTyxRQUFRO1NBQ2IsUUFBUSxFQUFFO1NBQ1YsV0FBVyxFQUFFO1NBQ2IsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUNqQztBQUNILENBQUM7QUFaRCxvQkFZQztBQUVELGtCQUFlLE9BQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzMvMjEuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGVudW0gQ09ERUNfREFUQV9OQU1FXG57XG5cdEJJRzUgPSAnQmlnNScsXG5cdEdCSyA9ICdHQksnLFxuXHRHQjIzMTIgPSAnR0IyMzEyJyxcblx0VVRGXzE2X0xFID0gJ1VURi0xNkxFJyxcblx0VVRGXzE2X0JFID0gJ1VURi0xNkJFJyxcblx0RVVDX0pQID0gJ0VVQy1KUCcsXG5cdFNISUZUX0pJUyA9ICdTSElGVF9KSVMnLFxuXHRBU0NJSSA9ICdBU0NJSScsXG5cdFVURl84ID0gJ1VURi04JyxcblxuXHRVVEZfMzJfTEUgPSAnVVRGLTMyTEUnLFxuXHRVVEZfMzJfQkUgPSAnVVRGLTMyQkUnLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRVxue1xuXHRCSUc1ID0gJ0JJRzUnLFxuXHRHQksgPSAnR0JLJyxcblx0R0IyMzEyID0gJ0dCMjMxMicsXG5cdFVURl8xNl9MRSA9ICdVVEYtMTZMRScsXG5cdFVURl8xNl9CRSA9ICdVVEYtMTZCRScsXG5cdEVVQ19KUCA9ICdFVUMtSlAnLFxuXHRTSElGVF9KSVMgPSAnU0hJRlRfSklTJyxcblx0QVNDSUkgPSAnQVNDSUknLFxuXHRVVEZfOCA9ICdVVEYtOCcsXG5cblx0VVRGXzMyX0xFID0gJ1VURi0zMkxFJyxcblx0VVRGXzMyX0JFID0gJ1VURi0zMkJFJyxcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQ09ERUNfREFUQV9FTkNPRElOR19JRFxue1xuXHRiaWc1aGtzY3MgPSAnYmlnNWhrc2NzJyxcblx0Y3A5MzYgPSAnY3A5MzYnLFxuXHRnYmsgPSAnZ2JrJyxcblx0ZXVjanAgPSAnZXVjanAnLFxuXHRzaGlmdGppcyA9ICdzaGlmdGppcycsXG5cdHV0ZjggPSAndXRmOCcsXG5cdHVjczIgPSAndWNzMicsXG5cdHV0ZjE2YmUgPSAndXRmMTZiZScsXG5cdHV0ZjMyYmUgPSAndXRmMzJiZScsXG5cdHV0ZjMybGUgPSAndXRmMzJsZScsXG5cblx0Ly8gLS0tLS0tLS0tLS0tXG5cblx0R0JLID0gJ2diaycsXG5cblx0RVVDX0pQID0gJ2V1Y2pwJyxcblxuXHRTSElGVF9KSVMgPSAnc2hpZnRqaXMnLFxuXG5cdFVURl84ID0gJ3V0ZjgnLFxuXG5cdFVURl8xNl9CRSA9ICd1dGYxNmJlJyxcblxuXHRVVEZfMzJfTEUgPSAndXRmMzJsZScsXG5cdFVURl8zMl9CRSA9ICd1dGYzMmJlJyxcblxuXHQvLyAtLS0tLS0tLS0tXG5cblx0YXNjaWkgPSAnYXNjaWknLFxuXHRBU0NJSSA9ICdBU0NJSScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVuY29kaW5nQ29kZWNcbntcblx0a2V5PzogQ09ERUNfREFUQV9FTkNPRElOR19JRCB8IHN0cmluZyxcblx0a2V5Mj86IENPREVDX0RBVEFfRU5DT0RJTkdfSUQgfCBzdHJpbmcsXG5cblx0aWQ/OiBDT0RFQ19EQVRBX0VOQ09ESU5HX0lEIHwgc3RyaW5nLFxuXG5cdG5hbWU/OiBDT0RFQ19EQVRBX05BTUUgfCBzdHJpbmcsXG5cdGlucHV0PzogRW51bUVuY29kaW5nIHwgc3RyaW5nLFxuXG5cdGVycm9yPzogYm9vbGVhbixcblx0bm90PzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRW5jb2RpbmdDb2RlY1RhYmxlXG57XG5cdFtDT0RFQ19EQVRBX0VOQ09ESU5HX0lELmJpZzVoa3Njc106IElFbmNvZGluZ0NvZGVjICYge1xuXHRcdHJlYWRvbmx5IGlkOiBcImJpZzVcIjtcblx0XHRyZWFkb25seSBuYW1lOiBDT0RFQ19EQVRBX05BTUUuQklHNTtcblx0fTtcblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQuY3A5MzZdOiBJRW5jb2RpbmdDb2RlYyAmIHtcblx0XHRyZWFkb25seSBuYW1lOiBDT0RFQ19EQVRBX05BTUUuR0IyMzEyO1xuXHR9O1xuXHRbQ09ERUNfREFUQV9FTkNPRElOR19JRC5nYmtdOiBJRW5jb2RpbmdDb2RlYyAmIHtcblx0XHRyZWFkb25seSBuYW1lOiBDT0RFQ19EQVRBX05BTUUuR0JLO1xuXHR9O1xuXHRbQ09ERUNfREFUQV9FTkNPRElOR19JRC5ldWNqcF06IElFbmNvZGluZ0NvZGVjICYge1xuXHRcdHJlYWRvbmx5IG5hbWU6IENPREVDX0RBVEFfTkFNRS5FVUNfSlA7XG5cdH07XG5cdFtDT0RFQ19EQVRBX0VOQ09ESU5HX0lELnNoaWZ0amlzXTogSUVuY29kaW5nQ29kZWMgJiB7XG5cdFx0cmVhZG9ubHkgbmFtZTogQ09ERUNfREFUQV9OQU1FLlNISUZUX0pJUztcblx0fTtcblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQudXRmOF06IElFbmNvZGluZ0NvZGVjICYge1xuXHRcdHJlYWRvbmx5IG5hbWU6IENPREVDX0RBVEFfTkFNRS5VVEZfODtcblx0fTtcblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQudWNzMl06IElFbmNvZGluZ0NvZGVjICYge1xuXHRcdHJlYWRvbmx5IG5hbWU6IENPREVDX0RBVEFfTkFNRS5VVEZfMTZfTEU7XG5cdH07XG5cdFtDT0RFQ19EQVRBX0VOQ09ESU5HX0lELnV0ZjE2YmVdOiBJRW5jb2RpbmdDb2RlYyAmIHtcblx0XHRyZWFkb25seSBuYW1lOiBDT0RFQ19EQVRBX05BTUUuVVRGXzE2X0JFO1xuXHR9O1xuXHRbQ09ERUNfREFUQV9FTkNPRElOR19JRC51dGYzMmJlXTogSUVuY29kaW5nQ29kZWMgJiB7XG5cdFx0cmVhZG9ubHkgbmFtZTogQ09ERUNfREFUQV9OQU1FLlVURl8zMl9CRTtcblx0XHRyZWFkb25seSBub3Q6IHRydWU7XG5cdH07XG5cdFtDT0RFQ19EQVRBX0VOQ09ESU5HX0lELnV0ZjMybGVdOiBJRW5jb2RpbmdDb2RlYyAmIHtcblx0XHRyZWFkb25seSBuYW1lOiBDT0RFQ19EQVRBX05BTUUuVVRGXzMyX0xFO1xuXHRcdHJlYWRvbmx5IG5vdDogdHJ1ZTtcblx0fTtcblxuXHRba2V5OiBzdHJpbmddOiBJRW5jb2RpbmdDb2RlYyxcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRU5VTV9OT0RFX0VOQ09ESU5HXG57XG5cdEFTQ0lJID0gJ2FzY2lpJyxcblxuXHRVVEY4ID0gJ3V0ZjgnLFxuXHRVVEZfOCA9ICd1dGYtOCcsXG5cblx0VVRGMTZfTEUgPSAndXRmMTZsZScsXG5cdFVDUzIgPSAndWNzMicsXG5cblx0QkFTRTY0ID0gJ2Jhc2U2NCcsXG5cblx0TEFUSU4xID0gJ2xhdGluMScsXG5cdEJJTkFSWSA9ICdiaW5hcnknLFxuXG5cdEhFWCA9ICdoZXgnLFxufVxuXG5leHBvcnQgY29uc3QgTm9kZUVuY29kaW5nOiBFTlVNX05PREVfRU5DT0RJTkdbXSA9IFtcblx0RU5VTV9OT0RFX0VOQ09ESU5HLkFTQ0lJLFxuXG5cdEVOVU1fTk9ERV9FTkNPRElORy5VVEY4LFxuXHRFTlVNX05PREVfRU5DT0RJTkcuVVRGXzgsXG5cblx0RU5VTV9OT0RFX0VOQ09ESU5HLlVURjE2X0xFLFxuXHRFTlVNX05PREVfRU5DT0RJTkcuVUNTMixcblxuXHRFTlVNX05PREVfRU5DT0RJTkcuQkFTRTY0LFxuXG5cdEVOVU1fTk9ERV9FTkNPRElORy5MQVRJTjEsXG5cdEVOVU1fTk9ERV9FTkNPRElORy5CSU5BUlksXG5cblx0RU5VTV9OT0RFX0VOQ09ESU5HLkhFWCxcbl07XG5cbmV4cG9ydCBjb25zdCBjb2RlY190YWJsZTogSUVuY29kaW5nQ29kZWNUYWJsZSA9IHtcblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQuYmlnNWhrc2NzXTogX2NvZGVjVGFibGUoe1xuXHRcdGlkOiAnYmlnNScsXG5cdFx0bmFtZTogQ09ERUNfREFUQV9OQU1FLkJJRzUsXG5cdH0gYXMgY29uc3QpLFxuXHRbQ09ERUNfREFUQV9FTkNPRElOR19JRC5jcDkzNl06IF9jb2RlY1RhYmxlKHtcblx0XHRuYW1lOiBDT0RFQ19EQVRBX05BTUUuR0IyMzEyLFxuXHR9IGFzIGNvbnN0KSxcblxuXHRbQ09ERUNfREFUQV9FTkNPRElOR19JRC5nYmtdOiBfY29kZWNUYWJsZSh7XG5cdFx0bmFtZTogQ09ERUNfREFUQV9OQU1FLkdCSyxcblx0fSBhcyBjb25zdCksXG5cblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQuZXVjanBdOiBfY29kZWNUYWJsZSh7XG5cdFx0bmFtZTogQ09ERUNfREFUQV9OQU1FLkVVQ19KUCxcblx0fSBhcyBjb25zdCksXG5cdFtDT0RFQ19EQVRBX0VOQ09ESU5HX0lELnNoaWZ0amlzXTogX2NvZGVjVGFibGUoe1xuXHRcdG5hbWU6IENPREVDX0RBVEFfTkFNRS5TSElGVF9KSVMsXG5cdH0gYXMgY29uc3QpLFxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQudXRmOF06IF9jb2RlY1RhYmxlKHtcblx0XHRuYW1lOiBDT0RFQ19EQVRBX05BTUUuVVRGXzgsXG5cdH0gYXMgY29uc3QpLFxuXHRbQ09ERUNfREFUQV9FTkNPRElOR19JRC51Y3MyXTogX2NvZGVjVGFibGUoe1xuXHRcdG5hbWU6IENPREVDX0RBVEFfTkFNRS5VVEZfMTZfTEUsXG5cdH0gYXMgY29uc3QpLFxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQudXRmMTZiZV06IF9jb2RlY1RhYmxlKHtcblx0XHRuYW1lOiBDT0RFQ19EQVRBX05BTUUuVVRGXzE2X0JFLFxuXHR9IGFzIGNvbnN0KSxcblxuXHQvKipcblx0ICogRXJyb3I6IEVuY29kaW5nIG5vdCByZWNvZ25pemVkOiAnJyAoc2VhcmNoZWQgYXM6ICcnKVxuXHQgKi9cblx0W0NPREVDX0RBVEFfRU5DT0RJTkdfSUQudXRmMzJiZV06IF9jb2RlY1RhYmxlKHtcblx0XHRuYW1lOiBDT0RFQ19EQVRBX05BTUUuVVRGXzMyX0JFLFxuXHRcdG5vdDogdHJ1ZSxcblx0fSBhcyBjb25zdCksXG5cdFtDT0RFQ19EQVRBX0VOQ09ESU5HX0lELnV0ZjMybGVdOiBfY29kZWNUYWJsZSh7XG5cdFx0bmFtZTogQ09ERUNfREFUQV9OQU1FLlVURl8zMl9MRSxcblx0XHRub3Q6IHRydWUsXG5cdH0gYXMgY29uc3QpLFxufTtcblxuZXhwb3J0IGVudW0gRW51bUVuY29kaW5nXG57XG5cdEJJRzUgPSAnQmlnNScsXG5cdFVURjggPSAnVVRGLTgnLFxuXHRHQksgPSAnR2JrJyxcbn1cblxuZXhwb3J0IHR5cGUgdkVuY29kaW5nID0gc3RyaW5nIHwgbnVsbCB8IEVudW1FbmNvZGluZyB8IEVOVU1fTk9ERV9FTkNPRElORyB8IEJ1ZmZlckVuY29kaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEZXRlY3REYXRhXG57XG5cdGVuY29kaW5nOiBzdHJpbmcsXG5cdGNvbmZpZGVuY2U6IG51bWJlcixcblxuXHRuYW1lPzogc3RyaW5nLFxuXHRpZD86IENPREVDX0RBVEFfRU5DT0RJTkdfSUQgfCBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlY0RhdGFOYW1lVG9VcHBlckNhc2U8VCBleHRlbmRzIGtleW9mIHR5cGVvZiBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRT4oa2V5OiAodHlwZW9mIENPREVDX0RBVEFfTkFNRV9UT19VUFBFUl9DQVNFIHwgdHlwZW9mIENPREVDX0RBVEFfTkFNRSlbVF0pOiAodHlwZW9mIENPREVDX0RBVEFfTkFNRV9UT19VUFBFUl9DQVNFKVtUXVxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVjRGF0YU5hbWVUb1VwcGVyQ2FzZShrZXk6IElEZXRlY3REYXRhW1wibmFtZVwiXSk6IENPREVDX0RBVEFfTkFNRV9UT19VUFBFUl9DQVNFIHwgc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24gY29kZWNEYXRhTmFtZVRvVXBwZXJDYXNlKGtleTogSURldGVjdERhdGFbXCJuYW1lXCJdKTogQ09ERUNfREFUQV9OQU1FX1RPX1VQUEVSX0NBU0UgfCBzdHJpbmdcbntcblx0cmV0dXJuIGtleS50b1VwcGVyQ2FzZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29kZWNUYWJsZTxUIGV4dGVuZHMgUGFydGlhbDxJRW5jb2RpbmdDb2RlYz4+KGRhdGE6IFQpOiBJRW5jb2RpbmdDb2RlYyAmIFRcbntcblx0cmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICog6L+U5Zue5bCP5a+r5qiZ5rqW5YyW5b6M55qE57eo56K8IElEXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZW5jKGVuY29kaW5nOiBzdHJpbmcgfCBDT0RFQ19EQVRBX05BTUUgfCBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRSB8IEVOVU1fTk9ERV9FTkNPRElORyk6IENPREVDX0RBVEFfRU5DT0RJTkdfSUQgfCBzdHJpbmdcbi8qKlxuICog6L+U5Zue5bCP5a+r5qiZ5rqW5YyW5b6M55qE57eo56K8IElEXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZW5jPFQgZXh0ZW5kcyBDT0RFQ19EQVRBX0VOQ09ESU5HX0lEIHwgc3RyaW5nPihlbmNvZGluZzogc3RyaW5nIHwgQ09ERUNfREFUQV9OQU1FIHwgQ09ERUNfREFUQV9OQU1FX1RPX1VQUEVSX0NBU0UgfCBFTlVNX05PREVfRU5DT0RJTkcpOiBUXG5leHBvcnQgZnVuY3Rpb24gX2VuYyhlbmNvZGluZzogc3RyaW5nIHwgQ09ERUNfREFUQV9OQU1FIHwgQ09ERUNfREFUQV9OQU1FX1RPX1VQUEVSX0NBU0UgfCBFTlVNX05PREVfRU5DT0RJTkcpOiBDT0RFQ19EQVRBX0VOQ09ESU5HX0lEIHwgc3RyaW5nXG57XG5cdGlmIChlbmNvZGluZyA9PSBudWxsKVxuXHR7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBlbmNvZGluZyAnJHtlbmNvZGluZ30nIGlzIGJyb2tlbmApO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kaW5nXG5cdFx0LnRvU3RyaW5nKClcblx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9bXjAtOWEtel18OlxcZHs0fSQvZywgJycpXG5cdFx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vY29uc3QnKTtcbiJdfQ==