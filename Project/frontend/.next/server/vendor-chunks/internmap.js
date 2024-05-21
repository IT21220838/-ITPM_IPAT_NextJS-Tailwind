"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/internmap";
exports.ids = ["vendor-chunks/internmap"];
exports.modules = {

/***/ "(ssr)/./node_modules/internmap/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/internmap/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InternMap: () => (/* binding */ InternMap),\n/* harmony export */   InternSet: () => (/* binding */ InternSet)\n/* harmony export */ });\nclass InternMap extends Map {\n    constructor(entries, key = keyof){\n        super();\n        Object.defineProperties(this, {\n            _intern: {\n                value: new Map()\n            },\n            _key: {\n                value: key\n            }\n        });\n        if (entries != null) for (const [key, value] of entries)this.set(key, value);\n    }\n    get(key) {\n        return super.get(intern_get(this, key));\n    }\n    has(key) {\n        return super.has(intern_get(this, key));\n    }\n    set(key, value) {\n        return super.set(intern_set(this, key), value);\n    }\n    delete(key) {\n        return super.delete(intern_delete(this, key));\n    }\n}\nclass InternSet extends Set {\n    constructor(values, key = keyof){\n        super();\n        Object.defineProperties(this, {\n            _intern: {\n                value: new Map()\n            },\n            _key: {\n                value: key\n            }\n        });\n        if (values != null) for (const value of values)this.add(value);\n    }\n    has(value) {\n        return super.has(intern_get(this, value));\n    }\n    add(value) {\n        return super.add(intern_set(this, value));\n    }\n    delete(value) {\n        return super.delete(intern_delete(this, value));\n    }\n}\nfunction intern_get({ _intern, _key }, value) {\n    const key = _key(value);\n    return _intern.has(key) ? _intern.get(key) : value;\n}\nfunction intern_set({ _intern, _key }, value) {\n    const key = _key(value);\n    if (_intern.has(key)) return _intern.get(key);\n    _intern.set(key, value);\n    return value;\n}\nfunction intern_delete({ _intern, _key }, value) {\n    const key = _key(value);\n    if (_intern.has(key)) {\n        value = _intern.get(key);\n        _intern.delete(key);\n    }\n    return value;\n}\nfunction keyof(value) {\n    return value !== null && typeof value === \"object\" ? value.valueOf() : value;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50ZXJubWFwL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGtCQUFrQkM7SUFDN0JDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTUMsS0FBSyxDQUFFO1FBQ2hDLEtBQUs7UUFDTEMsT0FBT0MsZ0JBQWdCLENBQUMsSUFBSSxFQUFFO1lBQUNDLFNBQVM7Z0JBQUNDLE9BQU8sSUFBSVI7WUFBSztZQUFHUyxNQUFNO2dCQUFDRCxPQUFPTDtZQUFHO1FBQUM7UUFDOUUsSUFBSUQsV0FBVyxNQUFNLEtBQUssTUFBTSxDQUFDQyxLQUFLSyxNQUFNLElBQUlOLFFBQVMsSUFBSSxDQUFDUSxHQUFHLENBQUNQLEtBQUtLO0lBQ3pFO0lBQ0FHLElBQUlSLEdBQUcsRUFBRTtRQUNQLE9BQU8sS0FBSyxDQUFDUSxJQUFJQyxXQUFXLElBQUksRUFBRVQ7SUFDcEM7SUFDQVUsSUFBSVYsR0FBRyxFQUFFO1FBQ1AsT0FBTyxLQUFLLENBQUNVLElBQUlELFdBQVcsSUFBSSxFQUFFVDtJQUNwQztJQUNBTyxJQUFJUCxHQUFHLEVBQUVLLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDRSxJQUFJSSxXQUFXLElBQUksRUFBRVgsTUFBTUs7SUFDMUM7SUFDQU8sT0FBT1osR0FBRyxFQUFFO1FBQ1YsT0FBTyxLQUFLLENBQUNZLE9BQU9DLGNBQWMsSUFBSSxFQUFFYjtJQUMxQztBQUNGO0FBRU8sTUFBTWMsa0JBQWtCQztJQUM3QmpCLFlBQVlrQixNQUFNLEVBQUVoQixNQUFNQyxLQUFLLENBQUU7UUFDL0IsS0FBSztRQUNMQyxPQUFPQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7WUFBQ0MsU0FBUztnQkFBQ0MsT0FBTyxJQUFJUjtZQUFLO1lBQUdTLE1BQU07Z0JBQUNELE9BQU9MO1lBQUc7UUFBQztRQUM5RSxJQUFJZ0IsVUFBVSxNQUFNLEtBQUssTUFBTVgsU0FBU1csT0FBUSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1o7SUFDM0Q7SUFDQUssSUFBSUwsS0FBSyxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUNLLElBQUlELFdBQVcsSUFBSSxFQUFFSjtJQUNwQztJQUNBWSxJQUFJWixLQUFLLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQ1ksSUFBSU4sV0FBVyxJQUFJLEVBQUVOO0lBQ3BDO0lBQ0FPLE9BQU9QLEtBQUssRUFBRTtRQUNaLE9BQU8sS0FBSyxDQUFDTyxPQUFPQyxjQUFjLElBQUksRUFBRVI7SUFDMUM7QUFDRjtBQUVBLFNBQVNJLFdBQVcsRUFBQ0wsT0FBTyxFQUFFRSxJQUFJLEVBQUMsRUFBRUQsS0FBSztJQUN4QyxNQUFNTCxNQUFNTSxLQUFLRDtJQUNqQixPQUFPRCxRQUFRTSxHQUFHLENBQUNWLE9BQU9JLFFBQVFJLEdBQUcsQ0FBQ1IsT0FBT0s7QUFDL0M7QUFFQSxTQUFTTSxXQUFXLEVBQUNQLE9BQU8sRUFBRUUsSUFBSSxFQUFDLEVBQUVELEtBQUs7SUFDeEMsTUFBTUwsTUFBTU0sS0FBS0Q7SUFDakIsSUFBSUQsUUFBUU0sR0FBRyxDQUFDVixNQUFNLE9BQU9JLFFBQVFJLEdBQUcsQ0FBQ1I7SUFDekNJLFFBQVFHLEdBQUcsQ0FBQ1AsS0FBS0s7SUFDakIsT0FBT0E7QUFDVDtBQUVBLFNBQVNRLGNBQWMsRUFBQ1QsT0FBTyxFQUFFRSxJQUFJLEVBQUMsRUFBRUQsS0FBSztJQUMzQyxNQUFNTCxNQUFNTSxLQUFLRDtJQUNqQixJQUFJRCxRQUFRTSxHQUFHLENBQUNWLE1BQU07UUFDcEJLLFFBQVFELFFBQVFJLEdBQUcsQ0FBQ1I7UUFDcEJJLFFBQVFRLE1BQU0sQ0FBQ1o7SUFDakI7SUFDQSxPQUFPSztBQUNUO0FBRUEsU0FBU0osTUFBTUksS0FBSztJQUNsQixPQUFPQSxVQUFVLFFBQVEsT0FBT0EsVUFBVSxXQUFXQSxNQUFNYSxPQUFPLEtBQUtiO0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2ludGVybm1hcC9zcmMvaW5kZXguanM/ZTczOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW50ZXJuTWFwIGV4dGVuZHMgTWFwIHtcbiAgY29uc3RydWN0b3IoZW50cmllcywga2V5ID0ga2V5b2YpIHtcbiAgICBzdXBlcigpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtfaW50ZXJuOiB7dmFsdWU6IG5ldyBNYXAoKX0sIF9rZXk6IHt2YWx1ZToga2V5fX0pO1xuICAgIGlmIChlbnRyaWVzICE9IG51bGwpIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXMpIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xuICB9XG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KGludGVybl9nZXQodGhpcywga2V5KSk7XG4gIH1cbiAgaGFzKGtleSkge1xuICAgIHJldHVybiBzdXBlci5oYXMoaW50ZXJuX2dldCh0aGlzLCBrZXkpKTtcbiAgfVxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci5zZXQoaW50ZXJuX3NldCh0aGlzLCBrZXkpLCB2YWx1ZSk7XG4gIH1cbiAgZGVsZXRlKGtleSkge1xuICAgIHJldHVybiBzdXBlci5kZWxldGUoaW50ZXJuX2RlbGV0ZSh0aGlzLCBrZXkpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJuU2V0IGV4dGVuZHMgU2V0IHtcbiAgY29uc3RydWN0b3IodmFsdWVzLCBrZXkgPSBrZXlvZikge1xuICAgIHN1cGVyKCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge19pbnRlcm46IHt2YWx1ZTogbmV3IE1hcCgpfSwgX2tleToge3ZhbHVlOiBrZXl9fSk7XG4gICAgaWYgKHZhbHVlcyAhPSBudWxsKSBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykgdGhpcy5hZGQodmFsdWUpO1xuICB9XG4gIGhhcyh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci5oYXMoaW50ZXJuX2dldCh0aGlzLCB2YWx1ZSkpO1xuICB9XG4gIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci5hZGQoaW50ZXJuX3NldCh0aGlzLCB2YWx1ZSkpO1xuICB9XG4gIGRlbGV0ZSh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci5kZWxldGUoaW50ZXJuX2RlbGV0ZSh0aGlzLCB2YWx1ZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGVybl9nZXQoe19pbnRlcm4sIF9rZXl9LCB2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBfa2V5KHZhbHVlKTtcbiAgcmV0dXJuIF9pbnRlcm4uaGFzKGtleSkgPyBfaW50ZXJuLmdldChrZXkpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGludGVybl9zZXQoe19pbnRlcm4sIF9rZXl9LCB2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBfa2V5KHZhbHVlKTtcbiAgaWYgKF9pbnRlcm4uaGFzKGtleSkpIHJldHVybiBfaW50ZXJuLmdldChrZXkpO1xuICBfaW50ZXJuLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5fZGVsZXRlKHtfaW50ZXJuLCBfa2V5fSwgdmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gX2tleSh2YWx1ZSk7XG4gIGlmIChfaW50ZXJuLmhhcyhrZXkpKSB7XG4gICAgdmFsdWUgPSBfaW50ZXJuLmdldChrZXkpO1xuICAgIF9pbnRlcm4uZGVsZXRlKGtleSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlvZih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG59XG4iXSwibmFtZXMiOlsiSW50ZXJuTWFwIiwiTWFwIiwiY29uc3RydWN0b3IiLCJlbnRyaWVzIiwia2V5Iiwia2V5b2YiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX2ludGVybiIsInZhbHVlIiwiX2tleSIsInNldCIsImdldCIsImludGVybl9nZXQiLCJoYXMiLCJpbnRlcm5fc2V0IiwiZGVsZXRlIiwiaW50ZXJuX2RlbGV0ZSIsIkludGVyblNldCIsIlNldCIsInZhbHVlcyIsImFkZCIsInZhbHVlT2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/internmap/src/index.js\n");

/***/ })

};
;