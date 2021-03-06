"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const iconvLite = require("iconv-lite");
exports.iconvLite = iconvLite;
const jschardet = require("jschardet");
exports.jschardet = jschardet;
var encodingExists = iconvLite.encodingExists;
exports.encodingExists = encodingExists;
__export(require("./encoding"));
__export(require("./lib/const"));
const encoding_1 = require("./encoding");
exports.disableCodecDataWarn = encoding_1.disableCodecDataWarn;
const const_1 = require("./lib/const");
/**
 * 停用編碼檢測警告
 */
function skipDecodeWarning(bool = true) {
    // @ts-ignore
    return iconvLite.skipDecodeWarning = bool;
}
exports.skipDecodeWarning = skipDecodeWarning;
/**
 * 將輸入內容轉換為 Buffer
 */
function BufferFrom(str, encoding, from) {
    let data;
    if (from) {
        data = Buffer.from(str, from);
    }
    else {
        data = str;
    }
    data = decode(data);
    let buf = iconvLite.encode(data, encoding);
    return buf;
}
exports.BufferFrom = BufferFrom;
/**
 * 檢測輸入內容編碼
 */
function detect(str, plus) {
    let ret = jschardet.detect(str);
    if (plus) {
        let cd = encoding_1.codec_data(ret.encoding);
        if (cd) {
            if (cd.name) {
                ret.name = cd.name;
            }
            ret.id = cd.id;
        }
    }
    if (!ret.name) {
        ret.name = ret.encoding;
    }
    return ret;
}
exports.detect = detect;
/**
 * 檢測輸入內容編碼並且轉換為 字串
 */
function decode(str, from = null) {
    let c;
    if (!str.length) {
        return '';
    }
    if (!from) {
        c = detect(str);
        from = c.encoding;
    }
    let data;
    let cd = encoding_1.codec_data(from);
    let key;
    if (cd && cd.name && !cd.not) {
        key = cd.name;
    }
    else {
        key = from;
    }
    switch (const_1.codecDataNameToUpperCase(key)) {
        //case 'BIG5':
        //case 'GBK':
        //case 'GB2312':
        //case 'UTF-16LE':
        //case 'UTF-16BE':
        //case 'EUC-JP':
        //case 'SHIFT_JIS':
        case "BIG5" /* BIG5 */:
        case "GBK" /* GBK */:
        case "GB2312" /* GB2312 */:
        case "UTF-16LE" /* UTF_16_LE */:
        case "UTF-16BE" /* UTF_16_BE */:
        case "EUC-JP" /* EUC_JP */:
        case "SHIFT_JIS" /* SHIFT_JIS */:
            data = iconvLite.decode(str, from);
            break;
        //case 'ASCII':
        //case 'UTF-8':
        case "ASCII" /* ASCII */:
        case "UTF-8" /* UTF_8 */:
            data = str;
            break;
        default:
            c = c || detect(str);
            // @ts-ignore
            if (!iconvLite.skipDecodeWarning) {
                encoding_1.console.warn('decode', from, c);
            }
            //data = str;
            data = iconvLite.decode(str, from);
            break;
    }
    return data;
}
exports.decode = decode;
/**
 * 檢測輸入內容編碼並且轉換為 Buffer
 */
function encode(str, to = "utf8" /* UTF8 */, from = null) {
    let buf = BufferFrom(str, "utf8" /* UTF8 */);
    // @ts-ignore
    return iconvLite.encode(buf, to);
}
exports.encode = encode;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUF5QztBQXFCeEMsOEJBQVM7QUFwQlYsdUNBQXdDO0FBbUJ2Qyw4QkFBUztBQWpCVixJQUFPLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBUWhELHdDQUFjO0FBTmYsZ0NBQTJCO0FBQzNCLGlDQUE0QjtBQUM1Qix5Q0FBK0Y7QUFnQjlGLCtCQWhCNkIsK0JBQW9CLENBZ0I3QjtBQWZyQix1Q0FBMEc7QUFrQjFHOztHQUVHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUMsT0FBZ0IsSUFBSTtJQUVyRCxhQUFhO0lBQ2IsT0FBTyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0FBQzNDLENBQUM7QUFKRCw4Q0FJQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFtQixFQUFFLElBQWdCO0lBRXBFLElBQUksSUFBSSxDQUFDO0lBRVQsSUFBSSxJQUFJLEVBQ1I7UUFDQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBc0IsQ0FBQyxDQUFDO0tBQ2hEO1NBRUQ7UUFDQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQ1g7SUFFRCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQztBQWpCRCxnQ0FpQkM7QUFFRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBYztJQUV6QyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBdUIsQ0FBQztJQUV0RCxJQUFJLElBQUksRUFDUjtRQUNDLElBQUksRUFBRSxHQUFHLHFCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksRUFBRSxFQUNOO1lBQ0MsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUNYO2dCQUNDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzthQUNuQjtZQUVELEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNmO0tBQ0Q7SUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFDYjtRQUNDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztLQUN4QjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQztBQXhCRCx3QkF3QkM7QUFFRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBa0IsSUFBSTtJQUVqRCxJQUFJLENBQUMsQ0FBQztJQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUNmO1FBQ0MsT0FBTyxFQUFFLENBQUM7S0FDVjtJQUVELElBQUksQ0FBQyxJQUFJLEVBQ1Q7UUFDQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxJQUFJLENBQUM7SUFFVCxJQUFJLEVBQUUsR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLElBQUksR0FBVyxDQUFDO0lBRWhCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUM1QjtRQUNDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Q7U0FFRDtRQUNDLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDWDtJQUVELFFBQVEsZ0NBQXdCLENBQUMsR0FBRyxDQUFDLEVBQ3JDO1FBQ0MsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF3QztRQUN4QyxxQkFBdUM7UUFDdkMsMkJBQTBDO1FBQzFDLGdDQUE2QztRQUM3QyxnQ0FBNkM7UUFDN0MsMkJBQTBDO1FBQzFDO1lBQ0MsSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLE1BQU07UUFDUCxlQUFlO1FBQ2YsZUFBZTtRQUNmLHlCQUF5QztRQUN6QztZQUNDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDWCxNQUFNO1FBQ1A7WUFDQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyQixhQUFhO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7Z0JBQ0Msa0JBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUVELGFBQWE7WUFDYixJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsTUFBTTtLQUNQO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBckVELHdCQXFFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEdBQUcsRUFBRSxzQkFBdUMsRUFBRSxPQUFrQixJQUFJO0lBRTFGLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLG9CQUEwQixDQUFDO0lBRW5ELGFBQWE7SUFDYixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFORCx3QkFNQztBQUVELGtCQUFlLE9BQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaWNvbnZMaXRlID0gcmVxdWlyZSgnaWNvbnYtbGl0ZScpO1xuaW1wb3J0IGpzY2hhcmRldCA9IHJlcXVpcmUoJ2pzY2hhcmRldCcpO1xuXG5pbXBvcnQgZW5jb2RpbmdFeGlzdHMgPSBpY29udkxpdGUuZW5jb2RpbmdFeGlzdHM7XG5cbmV4cG9ydCAqIGZyb20gJy4vZW5jb2RpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29uc3QnO1xuaW1wb3J0IHsgY29kZWNfZGF0YSwgY29uc29sZSwgZGlzYWJsZUNvZGVjRGF0YVdhcm4sIElEZXRlY3REYXRhLCB2RW5jb2RpbmcgfSBmcm9tICcuL2VuY29kaW5nJztcbmltcG9ydCB7IGNvZGVjRGF0YU5hbWVUb1VwcGVyQ2FzZSwgQ09ERUNfREFUQV9OQU1FX1RPX1VQUEVSX0NBU0UsIEVOVU1fTk9ERV9FTkNPRElORyB9IGZyb20gJy4vbGliL2NvbnN0JztcblxuZXhwb3J0IHtcblx0ZW5jb2RpbmdFeGlzdHMsXG5cblx0Lypcblx0Y29kZWNfZGF0YSxcblx0X2VuYyxcblx0aXNOb2RlRW5jb2RpbmcsXG5cdE5vZGVFbmNvZGluZyxcblx0Ki9cblxuXHRqc2NoYXJkZXQsXG5cdGljb252TGl0ZSxcblxuXHRkaXNhYmxlQ29kZWNEYXRhV2Fybixcbn1cblxuLyoqXG4gKiDlgZznlKjnt6jnorzmqqLmuKzorablkYpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXBEZWNvZGVXYXJuaW5nKGJvb2w6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhblxue1xuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBpY29udkxpdGUuc2tpcERlY29kZVdhcm5pbmcgPSBib29sO1xufVxuXG4vKipcbiAqIOWwh+i8uOWFpeWFp+Wuuei9ieaPm+eCuiBCdWZmZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJ1ZmZlckZyb20oc3RyLCBlbmNvZGluZzogdkVuY29kaW5nLCBmcm9tPzogdkVuY29kaW5nKTogQnVmZmVyXG57XG5cdGxldCBkYXRhO1xuXG5cdGlmIChmcm9tKVxuXHR7XG5cdFx0ZGF0YSA9IEJ1ZmZlci5mcm9tKHN0ciwgZnJvbSBhcyBCdWZmZXJFbmNvZGluZyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0ZGF0YSA9IHN0cjtcblx0fVxuXG5cdGRhdGEgPSBkZWNvZGUoZGF0YSk7XG5cdGxldCBidWYgPSBpY29udkxpdGUuZW5jb2RlKGRhdGEsIGVuY29kaW5nKTtcblxuXHRyZXR1cm4gYnVmO1xufVxuXG4vKipcbiAqIOaqoua4rOi8uOWFpeWFp+Wuuee3qOeivFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0KHN0ciwgcGx1cz86IGJvb2xlYW4pXG57XG5cdGxldCByZXQgPSBqc2NoYXJkZXQuZGV0ZWN0KHN0cikgYXMgYW55IGFzIElEZXRlY3REYXRhO1xuXG5cdGlmIChwbHVzKVxuXHR7XG5cdFx0bGV0IGNkID0gY29kZWNfZGF0YShyZXQuZW5jb2RpbmcpO1xuXHRcdGlmIChjZClcblx0XHR7XG5cdFx0XHRpZiAoY2QubmFtZSlcblx0XHRcdHtcblx0XHRcdFx0cmV0Lm5hbWUgPSBjZC5uYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXQuaWQgPSBjZC5pZDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIXJldC5uYW1lKVxuXHR7XG5cdFx0cmV0Lm5hbWUgPSByZXQuZW5jb2Rpbmc7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIOaqoua4rOi8uOWFpeWFp+Wuuee3qOeivOS4puS4lOi9ieaPm+eCuiDlrZfkuLJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZShzdHIsIGZyb206IHZFbmNvZGluZyA9IG51bGwpOiBzdHJpbmdcbntcblx0bGV0IGM7XG5cblx0aWYgKCFzdHIubGVuZ3RoKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYgKCFmcm9tKVxuXHR7XG5cdFx0YyA9IGRldGVjdChzdHIpO1xuXHRcdGZyb20gPSBjLmVuY29kaW5nO1xuXHR9XG5cblx0bGV0IGRhdGE7XG5cblx0bGV0IGNkID0gY29kZWNfZGF0YShmcm9tKTtcblxuXHRsZXQga2V5OiBzdHJpbmc7XG5cblx0aWYgKGNkICYmIGNkLm5hbWUgJiYgIWNkLm5vdClcblx0e1xuXHRcdGtleSA9IGNkLm5hbWU7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0a2V5ID0gZnJvbTtcblx0fVxuXG5cdHN3aXRjaCAoY29kZWNEYXRhTmFtZVRvVXBwZXJDYXNlKGtleSkpXG5cdHtcblx0XHQvL2Nhc2UgJ0JJRzUnOlxuXHRcdC8vY2FzZSAnR0JLJzpcblx0XHQvL2Nhc2UgJ0dCMjMxMic6XG5cdFx0Ly9jYXNlICdVVEYtMTZMRSc6XG5cdFx0Ly9jYXNlICdVVEYtMTZCRSc6XG5cdFx0Ly9jYXNlICdFVUMtSlAnOlxuXHRcdC8vY2FzZSAnU0hJRlRfSklTJzpcblx0XHRjYXNlIENPREVDX0RBVEFfTkFNRV9UT19VUFBFUl9DQVNFLkJJRzU6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5HQks6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5HQjIzMTI6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5VVEZfMTZfTEU6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5VVEZfMTZfQkU6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5FVUNfSlA6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5TSElGVF9KSVM6XG5cdFx0XHRkYXRhID0gaWNvbnZMaXRlLmRlY29kZShzdHIsIGZyb20pO1xuXHRcdFx0YnJlYWs7XG5cdFx0Ly9jYXNlICdBU0NJSSc6XG5cdFx0Ly9jYXNlICdVVEYtOCc6XG5cdFx0Y2FzZSBDT0RFQ19EQVRBX05BTUVfVE9fVVBQRVJfQ0FTRS5BU0NJSTpcblx0XHRjYXNlIENPREVDX0RBVEFfTkFNRV9UT19VUFBFUl9DQVNFLlVURl84OlxuXHRcdFx0ZGF0YSA9IHN0cjtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjID0gYyB8fCBkZXRlY3Qoc3RyKTtcblxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0aWYgKCFpY29udkxpdGUuc2tpcERlY29kZVdhcm5pbmcpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnNvbGUud2FybignZGVjb2RlJywgZnJvbSwgYyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vZGF0YSA9IHN0cjtcblx0XHRcdGRhdGEgPSBpY29udkxpdGUuZGVjb2RlKHN0ciwgZnJvbSk7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIOaqoua4rOi8uOWFpeWFp+Wuuee3qOeivOS4puS4lOi9ieaPm+eCuiBCdWZmZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZShzdHIsIHRvOiB2RW5jb2RpbmcgPSBFTlVNX05PREVfRU5DT0RJTkcuVVRGOCwgZnJvbTogdkVuY29kaW5nID0gbnVsbCk6IEJ1ZmZlclxue1xuXHRsZXQgYnVmID0gQnVmZmVyRnJvbShzdHIsIEVOVU1fTk9ERV9FTkNPRElORy5VVEY4KTtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBpY29udkxpdGUuZW5jb2RlKGJ1ZiwgdG8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzIGFzIHR5cGVvZiBpbXBvcnQoJy4vaW5kZXgnKTtcbiJdfQ==