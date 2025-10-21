const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.OFnbtAmn.js","../chunks/26YM4CDw.js","../chunks/IHki7fMi.js","../chunks/B892IFb4.js","../chunks/DM0TiTC4.js","../chunks/CxRZmP5h.js","../chunks/ZZQBskN6.js","../chunks/C4RyBbwH.js","../chunks/DdpX-qgb.js","../chunks/B6saGABT.js","../assets/0.BLBbRsZQ.css","../nodes/1.m324Pmh2.js","../nodes/2.iS8XXvD5.js","../nodes/3.B6uK0hQz.js","../chunks/D6YF6ztN.js","../chunks/C7OuiH84.js","../assets/Card.D6EUsTu8.css","../chunks/xR_rNlnp.js","../assets/Badge.D1UTJWue.css","../chunks/BkLeD19m.js","../assets/ErrorCard.D51WAEPT.css","../chunks/DNqXB6pv.js","../assets/3.DK1kltSD.css","../nodes/4.DcYKsEON.js","../nodes/5.pSeUs4G_.js","../assets/5.uI-FNlsM.css","../nodes/6.CoXZ9RGS.js","../nodes/7.DCzepz3t.js","../nodes/8.BjKtbckZ.js","../assets/8.23p-iqVw.css","../nodes/9.BmH2O7jw.js","../assets/9.D6R3BwPy.css","../nodes/10.BX3Tm7Kz.js","../assets/10.BeUKzFrO.css","../nodes/11.DQUXCeKH.js","../nodes/12.DJQY8jNv.js"])))=>i.map(i=>d[i]);
import{d as F}from"../chunks/B6saGABT.js";import{S as q,i as B,s as D,d as p,o as w,p as O,x as W,y as I,b as v,h as U,G as j,k as P,V,w as z,W as G,X as k,m as M,v as S,q as H,u as L,r as T,I as l,e as J,f as X,j as K,Y as R,a as Y,g as Q,t as Z}from"../chunks/26YM4CDw.js";import"../chunks/IHki7fMi.js";const $="modulepreload",nn=function(a,n){return new URL(a,n).href},C={},d=function(n,t,c){let o=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(t.map(i=>{if(i=nn(i,c),i in C)return;C[i]=!0;const g=i.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(!!c)for(let y=e.length-1;y>=0;y--){const E=e[y];if(E.href===i&&(!g||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${b}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":$,g||(f.as="script"),f.crossOrigin="",f.href=i,s&&f.setAttribute("nonce",s),document.head.appendChild(f),g)return new Promise((y,E)=>{f.addEventListener("load",y),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${i}`)))})}))}function u(e){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e}return o.then(e=>{for(const r of e||[])r.status==="rejected"&&u(r.reason);return n().catch(u)})},en=`//****************************************************************** WRAPPER BEGIN
let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } });

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } });

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
    : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedBigInt64Memory0 = null;

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return \`\\\${val}\`;
    }
    if (type == 'string') {
        return \`"\\\${val}"\`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return \`Symbol(\\\${description})\`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return \`Function(\\\${name})\`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for (let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of \`val\`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return \`\\\${val.name}: \\\${val.message}\\\\n\\\${val.stack}\`;
    }
    // TODO we could test for more things here, like \`Set\`s and \`Map\`s.
    return className;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => { }, unregister: () => { } }
    : new FinalizationRegistry(state => {
        wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b)
    });

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_50(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he84bfe4fefbef312(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_53(arg0, arg1) {
    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd848180b26e4591a(arg0, arg1);
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_56(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd407a95742fcd496(arg0, arg1);
}

function __wbg_adapter_59(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha7aaf995f6117ba3(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wbg_adapter_62(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h310491e1b08cdbdc(arg0, arg1, addHeapObject(arg2));
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
* @param {string} config_json
* @returns {string}
*/
function core_create_context(config_json) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_create_context(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
* @param {number} context
*/
function core_destroy_context(context) {
    wasm.core_destroy_context(context);
}

/**
* @param {number} context
* @param {string} function_name
* @param {any} params
* @param {number} request_id
*/
function core_request(context, function_name, params, request_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_request(retptr, context, ptr0, len0, addHeapObject(params), request_id);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\\\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_16b304a2cfa7ff4a = function () {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_d4638f722068f043 = function (arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function (arg0) {
        const ret = typeof (getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_new_28c511d9baebfa89 = function (arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_8417257aaedc936b = function (arg0, arg1, arg2) {
        const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_6648ce0320163d0f = function (arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbg_new_d9bc3a0147634640 = function () {
        const ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_72fb9a18b5ae2624 = function () {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_new = function (arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function () {
        const ret = new Date();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTime_2bc4375165f02d15 = function (arg0) {
        const ret = getObject(arg0).getTime();
        return ret;
    };
    imports.wbg.__wbg_crypto_6bab3db62a8f597e = function (arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_object = function (arg0) {
        const val = getObject(arg0);
        const ret = typeof (val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_process_6cdf0546f86c63e6 = function (arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_versions_d7353ecce16215f8 = function (arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_df9c841f7fd6e565 = function (arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_d2326adfa32c7477 = function () {
        return handleError(function () {
            const ret = module.require;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbindgen_is_function = function (arg0) {
        const ret = typeof (getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_call_b3ca7c6051f9bec1 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_msCrypto_b770d30eddcd2f4b = function (arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = function (arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function (arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_objectStore_da468793bd9df17b = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_readyState_f8d58cc9e9c4f906 = function (arg0) {
        const ret = getObject(arg0).readyState;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function (arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof (obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_setonsuccess_632ce0a1460455c2 = function (arg0, arg1) {
        getObject(arg0).onsuccess = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_8479b33e7568a904 = function (arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_target_2fc177e386c8b7b0 = function (arg0) {
        const ret = getObject(arg0).target;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function (arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_transaction_1e282a79e9bb7387 = function () {
        return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_setoncomplete_d8e4236665cbf1e2 = function (arg0, arg1) {
        getObject(arg0).oncomplete = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_da071ec94e148397 = function (arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_setonabort_523135fd9168ae8b = function (arg0, arg1) {
        getObject(arg0).onabort = getObject(arg1);
    };
    imports.wbg.__wbg_get_bd8e338fbd5f5cc8 = function (arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_196c84450b364254 = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).next();
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_done_298b57d23c0fc80c = function (arg0) {
        const ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_d93c65011f51a456 = function (arg0) {
        const ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_iterator_2cee6dadfd956dfa = function () {
        const ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_40fc327bfc8770e6 = function (arg0) {
        const ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_27c0f87801dedf93 = function () {
        return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbindgen_memory = function () {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_12d079cc21e14bdb = function (arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_63b92bc8671ed464 = function (arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a47bac70306a19a7 = function (arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_c20a40f15020d68a = function (arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_self_ce0dbfc45cf2f5be = function () {
        return handleError(function () {
            const ret = self.self;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_window_c6fb939a7f436783 = function () {
        return handleError(function () {
            const ret = window.window;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_globalThis_d1e6af4856ba331b = function () {
        return handleError(function () {
            const ret = globalThis.globalThis;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_global_207b558942527489 = function () {
        return handleError(function () {
            const ret = global.global;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbindgen_is_undefined = function (arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_e258087cd0daa0ea = function (arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_e3c254076557e348 = function () {
        return handleError(function (arg0, arg1) {
            const ret = Reflect.get(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_set_1f9b04f170055d33 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
            return ret;
        }, arguments)
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function (arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_6c846068575c3ec5 = function () {
        return handleError(function (arg0, arg1) {
            getObject(arg0).randomFillSync(takeObject(arg1));
        }, arguments)
    };
    imports.wbg.__wbg_subarray_a1f73cd4b5b42fe1 = function (arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_9c292cd2d477713f = function () {
        return handleError(function (arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        }, arguments)
    };
    imports.wbg.__wbindgen_error_new = function (arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function (arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function (arg0) {
        const v = getObject(arg0);
        const ret = typeof (v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function (arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof (obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6 = function (arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function (arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Error_e20bb56fd5591a93 = function (arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Error;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_stringify_8887fe74e1c50d81 = function () {
        return handleError(function (arg0) {
            const ret = JSON.stringify(getObject(arg0));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_message_5bf28016c2b49cfb = function (arg0) {
        const ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setTimeout_c172d5704ef82276 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
            return ret;
        }, arguments)
    };
    imports.wbg.__wbg_clearTimeout_ba63ae54a36e111e = function (arg0, arg1) {
        getObject(arg0).clearTimeout(arg1);
    };
    imports.wbg.__wbg_headers_abb199c3be8d817c = function (arg0) {
        const ret = getObject(arg0).headers;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_cb0e7a5c2dd66afd = function () {
        return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments)
    };
    imports.wbg.__wbg_fetch_c4b6afebdb1f918e = function (arg0, arg1) {
        const ret = getObject(arg0).fetch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Response_849eb93e75734b6e = function (arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Response;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_status_61a01141acd3cf74 = function (arg0) {
        const ret = getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_url_5f6dc4009ac5f99d = function (arg0, arg1) {
        const ret = getObject(arg1).url;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_message_c539585471131985 = function (arg0, arg1) {
        const ret = getObject(arg1).message;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_put_22792e17580ca18b = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_setonupgradeneeded_ad7645373c7d5e1b = function (arg0, arg1) {
        getObject(arg0).onupgradeneeded = getObject(arg1);
    };
    imports.wbg.__wbg_setonblocked_eb1032a3dfaabd1c = function (arg0, arg1) {
        getObject(arg0).onblocked = getObject(arg1);
    };
    imports.wbg.__wbg_setonversionchange_af0457acbb949df2 = function (arg0, arg1) {
        getObject(arg0).onversionchange = getObject(arg1);
    };
    imports.wbg.__wbg_Window_18c70cd8aae46148 = function (arg0) {
        const ret = getObject(arg0).Window;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_7c51d9056667f4e0 = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).indexedDB;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_WorkerGlobalScope_e05a65389c91124f = function (arg0) {
        const ret = getObject(arg0).WorkerGlobalScope;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_d312f95759a15fdc = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).indexedDB;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_global_43fcc492dd43a370 = function (arg0) {
        const ret = getObject(arg0).global;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_dc5bedbc95106b81 = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).indexedDB;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_open_a05198d687357536 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_get_5361b64cac0d0826 = function () {
        return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).get(getObject(arg1));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_objectStoreNames_588b5924274239fd = function (arg0) {
        const ret = getObject(arg0).objectStoreNames;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_item_87130eb4d38ecdc5 = function (arg0, arg1, arg2) {
        const ret = getObject(arg1).item(arg2 >>> 0);
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_createObjectStore_882f2f6b1b1ef040 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_new_cf3ec55744a78578 = function (arg0) {
        const ret = new Date(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTimezoneOffset_38257122e236c190 = function (arg0) {
        const ret = getObject(arg0).getTimezoneOffset();
        return ret;
    };
    imports.wbg.__wbg_new_6c74223c77cfabad = function () {
        return handleError(function (arg0, arg1) {
            const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_newwithstr_31798037aa20dbc1 = function () {
        return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_setonmessage_2af154ce83a3dc94 = function (arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_setonopen_ce7a4c51e5cf5788 = function (arg0, arg1) {
        getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_39a785302b0cd2e9 = function (arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_close_acd9532ff5c093ea = function () {
        return handleError(function (arg0) {
            getObject(arg0).close();
        }, arguments)
    };
    imports.wbg.__wbg_send_70603dff16b81b66 = function () {
        return handleError(function (arg0, arg1, arg2) {
            getObject(arg0).send(getStringFromWasm0(arg1, arg2));
        }, arguments)
    };
    imports.wbg.__wbg_data_3ce7c145ca4fbcdc = function (arg0) {
        const ret = getObject(arg0).data;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_66ae46612e7f0234 = function (arg0) {
        const ret = new Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithu8arraysequence_9d62f79f4425e877 = function () {
        return handleError(function (arg0) {
            const ret = new Blob(getObject(arg0));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_keys_91e412b4b222659f = function (arg0) {
        const ret = Object.keys(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_cd7af8117672b8b8 = function (arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbindgen_is_bigint = function (arg0) {
        const ret = typeof (getObject(arg0)) === 'bigint';
        return ret;
    };
    imports.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2 = function (arg0) {
        const ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_bigint_get_as_i64 = function (arg0, arg1) {
        const v = getObject(arg1);
        const ret = typeof (v) === 'bigint' ? v : undefined;
        getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_bigint_from_i64 = function (arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_eq = function (arg0, arg1) {
        const ret = getObject(arg0) === getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_isArray_2ab64d95e09ea0ae = function (arg0) {
        const ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_in = function (arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_instanceof_Map_87917e0a7aaf4012 = function (arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Map;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function (arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_entries_95cc2c823b285a09 = function (arg0) {
        const ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_null = function (arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbg_String_b9412f8799faab3e = function (arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_String_63b60bf2d0a90959 = function (arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_coreresponsehandler_20bcf2bc15d3b9a9 = function (arg0, arg1, arg2, arg3) {
        core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
    };
    imports.wbg.__wbindgen_debug_string = function (arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function (arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function (arg0) {
        const ret = getObject(arg0).queueMicrotask;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_b0083a7967828ec8 = function (arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_0c86a60e8fcfe9f6 = function (arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function (arg0) {
        queueMicrotask(getObject(arg0));
    };
    imports.wbg.__wbg_then_a73caa9a87991566 = function (arg0, arg1, arg2) {
        const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Window_f401953a2cf86220 = function (arg0) {
        let result;
        try {
            result = true;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_result_6cedf5f78600a79c = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).result;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_error_685b20024dc2d6ca = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).error;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_text_450a059667fd91fd = function () {
        return handleError(function (arg0) {
            const ret = getObject(arg0).text();
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0 = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbindgen_closure_wrapper808 = function (arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 79, __wbg_adapter_50);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper813 = function (arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 79, __wbg_adapter_53);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper3712 = function (arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 332, __wbg_adapter_56);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper4427 = function (arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 336, __wbg_adapter_59);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6024 = function (arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 336, __wbg_adapter_62);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6029 = function (arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 336, __wbg_adapter_62);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper7708 = function (arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 1325, __wbg_adapter_62);
        return addHeapObject(ret);
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedBigInt64Memory0 = null;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') { }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}


// export default __wbg_init;

//****************************************************************** WRAPPER END

function replaceUndefinedWithNulls(value) {
    if (value === undefined) {
        return null;
    }
    if (value instanceof Blob) {
        return value;
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = replaceUndefinedWithNulls(value[key]);
        }
        return result;
    }
    return value;
};

function core_response_handler(request_id, params, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        params: replaceUndefinedWithNulls(params),
        responseType: response_type,
        finished,
    });
}

async function replaceBlobsWithArrayBuffers(value) {
    if (value instanceof Blob) {
        return await value.arrayBuffer();
    }
    if (typeof value === "bigint") {
        if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) {
            return Number(value);
        } else {
            return value.toString();
        }
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = await replaceBlobsWithArrayBuffers(value[key]);
        }
        return result;
    }
    return value;
}

self.onmessage = (e) => {
    const message = e.data;
    switch (message.type) {
        case 'init':
            (async () => {
                await __wbg_init(message.wasmModule);
                postMessage({ type: 'init' });
            })();
            break;

        case 'createContext':
            postMessage({
                type: 'createContext',
                result: core_create_context(message.configJson),
                requestId: message.requestId,
            });
            break;

        case 'destroyContext':
            core_destroy_context(message.context);
            postMessage({
                type: 'destroyContext'
            });
            break;

        case 'request':
            (async () => {
                core_request(
                    message.context,
                    message.functionName,
                    await replaceBlobsWithArrayBuffers(message.functionParams),
                    message.requestId,
                );
            })();
            break;
    }
};`;let m=null;function tn(a){m=a}function rn(){return Promise.resolve("web")}function A(a){m&&m.debugLog&&m.debugLog(a)}async function an(){const a=Date.now();let n;if(m&&m.loadModule)n=await m.loadModule;else{const t=fetch(m&&m.binaryURL||"/eversdk.wasm");if(WebAssembly.compileStreaming)return A("compileStreaming binary"),await WebAssembly.compileStreaming(t);A("compile binary"),n=await WebAssembly.compile(await(await t).arrayBuffer())}await init(n),A(`compile time ${Date.now()-a}`)}function on(){const a=new Blob([en],{type:"application/javascript"}),n=URL.createObjectURL(a),t=new Worker(n);let c=1;const o=new Map;let u=!1,e=null;return t.onmessage=r=>{const s=r.data;switch(console.log("response",s),s.type){case"init":u=!0;for(const[g,b]of o.entries())t.postMessage({type:"createContext",requestId:g,configJson:b.configJson});break;case"createContext":const i=o.get(s.requestId);i&&(o.delete(s.requestId),i.resolve(s.result));break;case"destroyContext":break;case"response":e&&e(s.requestId,s.params,s.responseType,s.finished);break}},t.onerror=r=>{console.log(`Error from Web Worker: ${r.message}`)},(async()=>t.postMessage({type:"init",wasmModule:await an()}))(),Promise.resolve({getLibName:rn,setResponseParamsHandler:r=>{e=r},createContext:r=>new Promise(s=>{const i=c;c+=1,o.set(i,{configJson:r,resolve:s}),u&&t.postMessage({type:"createContext",requestId:i,configJson:r})}),destroyContext:r=>{t.postMessage({type:"destroyContext",context:r})},sendRequestParams:(r,s,i,g)=>{t.postMessage({type:"request",context:r,requestId:s,functionName:i,functionParams:g})}})}function sn(){return on()}tn({binaryURL:"/tvmsdk.wasm",disableSeparateWorker:!1,debugLog:a=>console.log("[TVM SDK]",a)});F.TvmClient.useBinaryLibrary(sn);const wn={};function cn(a){let n,t,c;var o=a[2][0];function u(e,r){return{props:{data:e[4],form:e[3],params:e[1].params}}}return o&&(n=k(o,u(a)),a[12](n)),{c(){n&&S(n.$$.fragment),t=j()},l(e){n&&L(n.$$.fragment,e),t=j()},m(e,r){n&&H(n,e,r),v(e,t,r),c=!0},p(e,r){if(r&4&&o!==(o=e[2][0])){if(n){W();const s=n;w(s.$$.fragment,1,0,()=>{M(s,1)}),I()}o?(n=k(o,u(e)),e[12](n),S(n.$$.fragment),O(n.$$.fragment,1),H(n,t.parentNode,t)):n=null}else if(o){const s={};r&16&&(s.data=e[4]),r&8&&(s.form=e[3]),r&2&&(s.params=e[1].params),n.$set(s)}},i(e){c||(n&&O(n.$$.fragment,e),c=!0)},o(e){n&&w(n.$$.fragment,e),c=!1},d(e){e&&p(t),a[12](null),n&&M(n,e)}}}function gn(a){let n,t,c;var o=a[2][0];function u(e,r){return{props:{data:e[4],params:e[1].params,$$slots:{default:[_n]},$$scope:{ctx:e}}}}return o&&(n=k(o,u(a)),a[11](n)),{c(){n&&S(n.$$.fragment),t=j()},l(e){n&&L(n.$$.fragment,e),t=j()},m(e,r){n&&H(n,e,r),v(e,t,r),c=!0},p(e,r){if(r&4&&o!==(o=e[2][0])){if(n){W();const s=n;w(s.$$.fragment,1,0,()=>{M(s,1)}),I()}o?(n=k(o,u(e)),e[11](n),S(n.$$.fragment),O(n.$$.fragment,1),H(n,t.parentNode,t)):n=null}else if(o){const s={};r&16&&(s.data=e[4]),r&2&&(s.params=e[1].params),r&8239&&(s.$$scope={dirty:r,ctx:e}),n.$set(s)}},i(e){c||(n&&O(n.$$.fragment,e),c=!0)},o(e){n&&w(n.$$.fragment,e),c=!1},d(e){e&&p(t),a[11](null),n&&M(n,e)}}}function _n(a){let n,t,c;var o=a[2][1];function u(e,r){return{props:{data:e[5],form:e[3],params:e[1].params}}}return o&&(n=k(o,u(a)),a[10](n)),{c(){n&&S(n.$$.fragment),t=j()},l(e){n&&L(n.$$.fragment,e),t=j()},m(e,r){n&&H(n,e,r),v(e,t,r),c=!0},p(e,r){if(r&4&&o!==(o=e[2][1])){if(n){W();const s=n;w(s.$$.fragment,1,0,()=>{M(s,1)}),I()}o?(n=k(o,u(e)),e[10](n),S(n.$$.fragment),O(n.$$.fragment,1),H(n,t.parentNode,t)):n=null}else if(o){const s={};r&32&&(s.data=e[5]),r&8&&(s.form=e[3]),r&2&&(s.params=e[1].params),n.$set(s)}},i(e){c||(n&&O(n.$$.fragment,e),c=!0)},o(e){n&&w(n.$$.fragment,e),c=!1},d(e){e&&p(t),a[10](null),n&&M(n,e)}}}function N(a){let n,t=a[7]&&x(a);return{c(){n=K("div"),t&&t.c(),this.h()},l(c){n=J(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=X(n);t&&t.l(o),o.forEach(p),this.h()},h(){T(n,"id","svelte-announcer"),T(n,"aria-live","assertive"),T(n,"aria-atomic","true"),l(n,"position","absolute"),l(n,"left","0"),l(n,"top","0"),l(n,"clip","rect(0 0 0 0)"),l(n,"clip-path","inset(50%)"),l(n,"overflow","hidden"),l(n,"white-space","nowrap"),l(n,"width","1px"),l(n,"height","1px")},m(c,o){v(c,n,o),t&&t.m(n,null)},p(c,o){c[7]?t?t.p(c,o):(t=x(c),t.c(),t.m(n,null)):t&&(t.d(1),t=null)},d(c){c&&p(n),t&&t.d()}}}function x(a){let n;return{c(){n=Z(a[8])},l(t){n=Q(t,a[8])},m(t,c){v(t,n,c)},p(t,c){c&256&&Y(n,t[8])},d(t){t&&p(n)}}}function un(a){let n,t,c,o,u;const e=[gn,cn],r=[];function s(g,b){return g[2][1]?0:1}n=s(a),t=r[n]=e[n](a);let i=a[6]&&N(a);return{c(){t.c(),c=P(),i&&i.c(),o=j()},l(g){t.l(g),c=U(g),i&&i.l(g),o=j()},m(g,b){r[n].m(g,b),v(g,c,b),i&&i.m(g,b),v(g,o,b),u=!0},p(g,[b]){let h=n;n=s(g),n===h?r[n].p(g,b):(W(),w(r[h],1,1,()=>{r[h]=null}),I(),t=r[n],t?t.p(g,b):(t=r[n]=e[n](g),t.c()),O(t,1),t.m(c.parentNode,c)),g[6]?i?i.p(g,b):(i=N(g),i.c(),i.m(o.parentNode,o)):i&&(i.d(1),i=null)},i(g){u||(O(t),u=!0)},o(g){w(t),u=!1},d(g){g&&(p(c),p(o)),r[n].d(g),i&&i.d(g)}}}function bn(a,n,t){let{stores:c}=n,{page:o}=n,{constructors:u}=n,{components:e=[]}=n,{form:r}=n,{data_0:s=null}=n,{data_1:i=null}=n;V(c.page.notify);let g=!1,b=!1,h=null;z(()=>{const _=c.page.subscribe(()=>{g&&(t(7,b=!0),G().then(()=>{t(8,h=document.title||"untitled page")}))});return t(6,g=!0),_});function f(_){R[_?"unshift":"push"](()=>{e[1]=_,t(0,e)})}function y(_){R[_?"unshift":"push"](()=>{e[0]=_,t(0,e)})}function E(_){R[_?"unshift":"push"](()=>{e[0]=_,t(0,e)})}return a.$$set=_=>{"stores"in _&&t(9,c=_.stores),"page"in _&&t(1,o=_.page),"constructors"in _&&t(2,u=_.constructors),"components"in _&&t(0,e=_.components),"form"in _&&t(3,r=_.form),"data_0"in _&&t(4,s=_.data_0),"data_1"in _&&t(5,i=_.data_1)},a.$$.update=()=>{a.$$.dirty&514&&c.page.set(o)},[e,o,u,r,s,i,g,b,h,c,f,y,E]}class On extends q{constructor(n){super(),B(this,n,bn,un,D,{stores:9,page:1,constructors:2,components:0,form:3,data_0:4,data_1:5})}}const jn=[()=>d(()=>import("../nodes/0.OFnbtAmn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>d(()=>import("../nodes/1.m324Pmh2.js"),__vite__mapDeps([11,1,2,4,5,3]),import.meta.url),()=>d(()=>import("../nodes/2.iS8XXvD5.js"),__vite__mapDeps([12,5,1,3,2]),import.meta.url),()=>d(()=>import("../nodes/3.B6uK0hQz.js"),__vite__mapDeps([13,1,14,2,4,5,3,6,15,16,17,18,19,20,21,8,7,9,22]),import.meta.url),()=>d(()=>import("../nodes/4.DcYKsEON.js"),__vite__mapDeps([23,1,14,2,8,7,9,6,3,15,16,19,20,17,18,21]),import.meta.url),()=>d(()=>import("../nodes/5.pSeUs4G_.js"),__vite__mapDeps([24,1,2,4,5,3,6,15,16,19,20,17,18,7,25]),import.meta.url),()=>d(()=>import("../nodes/6.CoXZ9RGS.js"),__vite__mapDeps([26,1,14,2,6,3,15,16,17,18]),import.meta.url),()=>d(()=>import("../nodes/7.DCzepz3t.js"),__vite__mapDeps([27,1,14,2,8,7,9,6,3,15,16,19,20,21]),import.meta.url),()=>d(()=>import("../nodes/8.BjKtbckZ.js"),__vite__mapDeps([28,1,2,4,5,3,6,15,16,19,20,17,18,7,29]),import.meta.url),()=>d(()=>import("../nodes/9.BmH2O7jw.js"),__vite__mapDeps([30,1,14,2,6,3,8,7,9,15,16,19,20,17,18,31]),import.meta.url),()=>d(()=>import("../nodes/10.BX3Tm7Kz.js"),__vite__mapDeps([32,1,14,2,8,7,9,6,3,15,16,19,20,17,18,33]),import.meta.url),()=>d(()=>import("../nodes/11.DQUXCeKH.js"),__vite__mapDeps([34,1,14,2,8,7,9,6,3,15,16,19,20,17,18,21]),import.meta.url),()=>d(()=>import("../nodes/12.DJQY8jNv.js"),__vite__mapDeps([35,1,14,2,4,5,3,6,15,16,19,20,17,18,7,25]),import.meta.url)],hn=[],yn={"/":[2],"/accounts/[id]":[3],"/blocks":[4],"/blocks/[id]":[5],"/contracts":[6],"/messages":[7],"/messages/[id]":[8],"/showcase":[9],"/stats":[10],"/transactions":[11],"/transactions/[id]":[12]},dn={handleError:({error:a})=>{console.error(a)},init:void 0,reroute:()=>{},transport:{}},fn=Object.fromEntries(Object.entries(dn.transport).map(([a,n])=>[a,n.decode])),vn=!1,En=(a,n)=>fn[a](n);export{En as decode,fn as decoders,yn as dictionary,vn as hash,dn as hooks,wn as matchers,jn as nodes,On as root,hn as server_loads};
