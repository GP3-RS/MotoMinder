/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/controllers/motoController.js":
/*!**********************************************!*\
  !*** ./server/controllers/motoController.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\nvar models = __webpack_require__(/*! ../models/motoModels */ \"./server/models/motoModels.js\");\nvar redis = __webpack_require__(/*! redis */ \"redis\");\nvar fetch = function fetch() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! node-fetch */ \"node-fetch\", 23)).then(function (_ref) {\n    var fetch = _ref[\"default\"];\n    return fetch.apply(void 0, args);\n  });\n};\nvar redisClient;\nvar motoController = {};\n_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n  return _regeneratorRuntime().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          redisClient = redis.createClient();\n          redisClient.on(\"connect\", function () {\n            return console.log('Connected to Redis cache successfully.');\n          });\n          redisClient.on(\"error\", function (error) {\n            return console.error(\"Error : \".concat(error));\n          });\n          _context.next = 5;\n          return redisClient.connect();\n        case 5:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}))();\nmotoController.addTask = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {\n    var _req$body, maint, task, cost, moto_id, returnedTask;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, maint = _req$body.maint, task = _req$body.task, cost = _req$body.cost, moto_id = _req$body.moto_id;\n            if (cost === undefined) cost = 0;\n            cost = Number(cost);\n            _context2.prev = 3;\n            _context2.next = 6;\n            return models.Task.create({\n              maint: maint,\n              task: task,\n              cost: cost,\n              moto_id: moto_id\n            });\n          case 6:\n            returnedTask = _context2.sent;\n            res.locals.task = returnedTask;\n            return _context2.abrupt(\"return\", next());\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2[\"catch\"](3);\n            next({\n              log: 'error in middleware addTask',\n              message: 'error in addTask'\n            });\n          case 14:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[3, 11]]);\n  }));\n  return function (_x, _x2, _x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nmotoController.getTasks = function (req, res, next) {\n  models.Task.find({}).exec().then(function (data) {\n    res.locals.tasks = data;\n    return next();\n  })[\"catch\"](function (err) {\n    return next({\n      log: 'error in middleware getTasks',\n      message: 'error in getTasks'\n    });\n  });\n};\nmotoController.deleteTask = function (req, res, next) {\n  var id = req.body.id;\n  models.Task.findOneAndDelete({\n    _id: id\n  }).exec().then(function (data) {\n    res.locals.task = data.task;\n    return next();\n  })[\"catch\"](function (err) {\n    return next({\n      log: \"error in middleware deleteTask\",\n      message: 'error in middleware deleteTask'\n    });\n  });\n};\nmotoController.editTask = function (req, res, next) {\n  var _req$body2 = req.body,\n    id = _req$body2.id,\n    done = _req$body2.done,\n    newTask = _req$body2.newTask;\n  if (newTask !== undefined) {\n    var _req$body3 = req.body,\n      _id = _req$body3.id,\n      _newTask = _req$body3.newTask;\n    models.Task.updateOne({\n      _id: _id\n    }, {\n      task: _newTask\n    }).exec().then(function (data) {\n      return next();\n    })[\"catch\"](function (err) {\n      return next({\n        log: \"error in middleware editTask\",\n        message: \"error in middleware editTask\"\n      });\n    });\n  }\n  if (done === false || done === true) {\n    models.Task.updateOne({\n      _id: id\n    }, {\n      done: done\n    }).exec().then(function (data) {\n      return next();\n    })[\"catch\"](function (err) {\n      return next({\n        log: \"error in middleware editTask\",\n        message: \"error in middleware editTask\"\n      });\n    });\n  }\n};\nmotoController.getBikes = function (req, res, next) {\n  models.Moto.find({}).exec().then(function (data) {\n    res.locals.bikes = data;\n    return next();\n  })[\"catch\"](function (err) {\n    return next({\n      log: 'error in middleware getBikes',\n      message: 'error in getMoto'\n    });\n  });\n};\nmotoController.addBike = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {\n    var _req$body4, year, make, model, returnedMoto;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _req$body4 = req.body, year = _req$body4.year, make = _req$body4.make, model = _req$body4.model;\n            year = Number(year);\n            _context3.prev = 2;\n            _context3.next = 5;\n            return models.Moto.create({\n              year: year,\n              make: make,\n              model: model\n            });\n          case 5:\n            returnedMoto = _context3.sent;\n            res.locals.bike = returnedMoto;\n            return _context3.abrupt(\"return\", next());\n          case 10:\n            _context3.prev = 10;\n            _context3.t0 = _context3[\"catch\"](2);\n            next({\n              log: 'error in middleware addBike',\n              message: 'error in addBike'\n            });\n          case 13:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[2, 10]]);\n  }));\n  return function (_x4, _x5, _x6) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nmotoController.deleteBike = function (req, res, next) {\n  var id = req.body.id;\n  models.Moto.findOneAndDelete({\n    _id: id\n  }).exec().then(function (bike) {\n    return res.locals.bike = bike;\n  })[\"catch\"](function (err) {\n    return next({\n      log: 'error in middleware deletBike',\n      message: 'error in middleware deleteBike'\n    });\n  });\n  models.Task.remove({\n    moto_id: id\n  }).exec()[\"catch\"](function (err) {\n    return next({\n      log: 'error in middleware deletBike',\n      message: 'error in middleware deleteBike'\n    });\n  });\n};\nmotoController.getBikeImg = /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {\n    var start, query, value;\n    return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            start = Date.now();\n            query = req.params.query;\n            _context4.next = 4;\n            return redisClient.get(query);\n          case 4:\n            value = _context4.sent;\n            if (!value) {\n              _context4.next = 12;\n              break;\n            }\n            console.log('cache hit');\n            res.locals.bikeImg = value;\n            console.log('time to return results: ', Date.now() - start);\n            return _context4.abrupt(\"return\", next());\n          case 12:\n            _context4.next = 14;\n            return fetch(process.env.GOOGLE_API + req.params.query).then(function (data) {\n              return data.json();\n            }).then(function (data) {\n              if (data) {\n                console.log('cache miss');\n                redisClient.set(query, data.items[0].pagemap.cse_image[0].src, 'EX', 10, function (err, result) {\n                  if (err) {\n                    console.error(err);\n                  } else console.log('Key set: ', result);\n                });\n                res.locals.bikeImg = data;\n                console.log('time to return results: ', Date.now() - start);\n                return next();\n              } else return next({\n                message: 'ERROR: Google API fetch request failed, likely because you have surpassed your daily limit of queries. Error message',\n                log: 'Google API fetch failed'\n              });\n            })[\"catch\"](function (err) {\n              return next({\n                message: 'ERROR: Google API fetch request failed, likely because you have surpassed your daily limit of queries. Exact message received by server is: ' + err.message,\n                log: 'Google API fetch failed and caught by catch block'\n              });\n            });\n          case 14:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return function (_x7, _x8, _x9) {\n    return _ref5.apply(this, arguments);\n  };\n}();\nmodule.exports = motoController;\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(fetch, \"fetch\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/controllers/motoController.js\");\n  reactHotLoader.register(redisClient, \"redisClient\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/controllers/motoController.js\");\n  reactHotLoader.register(motoController, \"motoController\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/controllers/motoController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./server/controllers/motoController.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar compile = function compile(app) {\n  if (true) {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default()));\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(compile, \"compile\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/devBundle.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./server/devBundle.js?");

/***/ }),

/***/ "./server/models/motoModels.js":
/*!*************************************!*\
  !*** ./server/models/motoModels.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\n// let uri = process.env.MONGO_URI\n\nmongoose.connect(process.env.MONGO_URI, {\n  // options for the connect method to parse the URI\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  // sets the name of the DB that our collections are part of\n  dbName: 'moto'\n}).then(function () {\n  return console.log('Connected to Mongo DB.');\n})[\"catch\"](function (err) {\n  return console.log(err);\n});\nvar Schema = mongoose.Schema;\nvar taskSchema = new Schema({\n  done: {\n    type: Boolean,\n    \"default\": false\n  },\n  maint: {\n    type: Boolean,\n    required: true\n  },\n  task: {\n    type: String,\n    required: true\n  },\n  cost: Number,\n  moto_id: {\n    type: Schema.Types.ObjectId,\n    ref: 'moto'\n  }\n});\nvar Task = mongoose.model('Task', taskSchema);\nvar motoSchema = new Schema({\n  year: Number,\n  make: String,\n  model: String\n});\nvar Moto = mongoose.model('Moto', motoSchema);\nmodule.exports = {\n  Task: Task,\n  Moto: Moto\n};\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Schema, \"Schema\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/models/motoModels.js\");\n  reactHotLoader.register(taskSchema, \"taskSchema\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/models/motoModels.js\");\n  reactHotLoader.register(Task, \"Task\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/models/motoModels.js\");\n  reactHotLoader.register(motoSchema, \"motoSchema\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/models/motoModels.js\");\n  reactHotLoader.register(Moto, \"Moto\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/models/motoModels.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./server/models/motoModels.js?");

/***/ }),

/***/ "./server/routes/api.js":
/*!******************************!*\
  !*** ./server/routes/api.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\nvar express = __webpack_require__(/*! express */ \"express\");\nvar motoController = __webpack_require__(/*! ../controllers/motoController */ \"./server/controllers/motoController.js\");\nvar router = express.Router();\nrouter.get('/tasks', motoController.getTasks, function (req, res) {\n  return res.status(200).json(res.locals);\n});\nrouter.get('/bike', motoController.getBikes, function (req, res) {\n  return res.status(200).json(res.locals);\n});\nrouter.get('/', motoController.getTasks, motoController.getBikes, function (req, res) {\n  return res.status(200).json(res.locals);\n});\nrouter.post('/', motoController.addTask, function (req, res) {\n  return res.status(200).json(\"successfully added \".concat(res.locals.task));\n});\nrouter[\"delete\"]('/', motoController.deleteTask, function (req, res) {\n  return res.status(200).json(\"Successfully deleted \".concat(res.locals.task));\n});\nrouter.patch('/', motoController.editTask, function (req, res) {\n  return res.status(200).json('Successfully updated task');\n});\nrouter.post('/bike', motoController.addBike, function (req, res) {\n  return res.status(200).json(res.locals.bike);\n});\nrouter[\"delete\"]('/bike', motoController.deleteBike, function (req, res) {\n  return res.status(200).json(\"Successfully deleted \".concat(res.locals.bike));\n});\nrouter.get('/all', motoController.getTasks, motoController.getBikes, function (req, res) {\n  return res.status(200).json(res.locals);\n});\nrouter.get('/bikeImg/:query', motoController.getBikeImg, function (req, res) {\n  return res.status(200).json(res.locals.bikeImg);\n});\nmodule.exports = router;\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/routes/api.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./server/routes/api.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compile(app);\nvar CURRENT_WORKING_DIR = process.cwd();\nvar apiRouter = __webpack_require__(/*! ./routes/api */ \"./server/routes/api.js\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nvar models = __webpack_require__(/*! ./models/motoModels */ \"./server/models/motoModels.js\");\nvar port = process.env.PORT || 3000;\n\n// handles parsing request body\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\n\n// serves static bundle file\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().join(CURRENT_WORKING_DIR, 'dist')));\n\n//routes requests to api\napp.use('/api', apiRouter);\napp.get('/', function (req, res) {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\napp.use(function (req, res) {\n  return res.status(404).send('Error 404: This page does not exist');\n});\n\n// Global Error Handler\napp.use(function (err, req, res, next) {\n  var defaultErr = {\n    log: 'Express error handler caught unknown middleware error',\n    status: 500,\n    message: {\n      err: 'An error occurred'\n    }\n  };\n  var errorObj = Object.assign({}, defaultErr, err);\n  console.log(errorObj.log);\n  return res.status(errorObj.status).json(errorObj.message);\n});\napp.listen(port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', port);\n});\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(app, \"app\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/server.js\");\n  reactHotLoader.register(port, \"port\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/server/server.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\nvar _default = function _default() {\n  return \"<!doctype html>\\n    <html lang=\\\"en\\\">\\n        <head>\\n            <meta charset=\\\"utf-8\\\">\\n            <title>Solo</title>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\"></div>\\n                <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\">\\n            </script>\\n        </body>\\n    </html>\";\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(_default, \"default\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/template.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n//const HtmlWebpackPlugin = require('html-webpack-plugin');\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: 'browser',\n  mode: 'development',\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, '/client/index.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env', ['@babel/preset-react', {\n            \"runtime\": \"automatic\"\n          }]]\n        }\n      }\n    }, {\n      test: /\\.css$/i,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.s[ac]ss$/i,\n      use: [\"style-loader\", \"css-loader\", \"sass-loader\"]\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    },\n    extensions: ['', '.js', '.jsx']\n  }\n};\nmodule.exports = config;\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/Gahl/Desktop/Codesmith/Week 5/Solo Project/webpack.config.client.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://solo-project/./webpack.config.client.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redis");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;