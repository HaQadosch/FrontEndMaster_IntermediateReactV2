(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1117: function(t, e, r) {
      t.exports = r(1118);
    },
    1118: function(t, e, r) {
      var n = (function(t) {
        'use strict';
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          a = 'function' === typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function u(t, e, r, n) {
          var a = e && e.prototype instanceof v ? e : v,
            o = Object.create(a.prototype),
            i = new S(n || []);
          return (
            (o._invoke = (function(t, e, r) {
              var n = s;
              return function(a, o) {
                if (n === f) throw new Error('Generator is already running');
                if (n === p) {
                  if ('throw' === a) throw o;
                  return k();
                }
                for (r.method = a, r.arg = o; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = O(i, r);
                    if (c) {
                      if (c === m) continue;
                      return c;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if (n === s) throw ((n = p), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = f;
                  var u = l(t, e, r);
                  if ('normal' === u.type) {
                    if (((n = r.done ? p : h), u.arg === m)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  'throw' === u.type && ((n = p), (r.method = 'throw'), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            o
          );
        }
        function l(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (n) {
            return { type: 'throw', arg: n };
          }
        }
        t.wrap = u;
        var s = 'suspendedStart',
          h = 'suspendedYield',
          f = 'executing',
          p = 'completed',
          m = {};
        function v() {}
        function d() {}
        function y() {}
        var g = {};
        g[o] = function() {
          return this;
        };
        var w = Object.getPrototypeOf,
          b = w && w(w(_([])));
        b && b !== r && n.call(b, o) && (g = b);
        var E = (y.prototype = v.prototype = Object.create(g));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t);
            };
          });
        }
        function L(t) {
          var e;
          this._invoke = function(r, a) {
            function o() {
              return new Promise(function(e, o) {
                !(function e(r, a, o, i) {
                  var c = l(t[r], t, a);
                  if ('throw' !== c.type) {
                    var u = c.arg,
                      s = u.value;
                    return s && 'object' === typeof s && n.call(s, '__await')
                      ? Promise.resolve(s.__await).then(
                          function(t) {
                            e('next', t, o, i);
                          },
                          function(t) {
                            e('throw', t, o, i);
                          },
                        )
                      : Promise.resolve(s).then(
                          function(t) {
                            (u.value = t), o(u);
                          },
                          function(t) {
                            return e('throw', t, o, i);
                          },
                        );
                  }
                  i(c.arg);
                })(r, a, e, o);
              });
            }
            return (e = e ? e.then(o, o) : o());
          };
        }
        function O(t, r) {
          var n = t.iterator[r.method];
          if (n === e) {
            if (((r.delegate = null), 'throw' === r.method)) {
              if (t.iterator.return && ((r.method = 'return'), (r.arg = e), O(t, r), 'throw' === r.method)) return m;
              (r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return m;
          }
          var a = l(n, t.iterator, r.arg);
          if ('throw' === a.type) return (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), m;
          var o = a.arg;
          return o
            ? o.done
              ? ((r[t.resultName] = o.value),
                (r.next = t.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                (r.delegate = null),
                m)
              : o
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              m);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function N(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function S(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(j, this), this.reset(!0);
        }
        function _(t) {
          if (t) {
            var r = t[o];
            if (r) return r.call(t);
            if ('function' === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                i = function r() {
                  for (; ++a < t.length; ) if (n.call(t, a)) return (r.value = t[a]), (r.done = !1), r;
                  return (r.value = e), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: e, done: !0 };
        }
        return (
          (d.prototype = E.constructor = y),
          (y.constructor = d),
          (y[c] = d.displayName = 'GeneratorFunction'),
          (t.isGeneratorFunction = function(t) {
            var e = 'function' === typeof t && t.constructor;
            return !!e && (e === d || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (t.mark = function(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), c in t || (t[c] = 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (t.awrap = function(t) {
            return { __await: t };
          }),
          x(L.prototype),
          (L.prototype[i] = function() {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function(e, r, n, a) {
            var o = new L(u(e, r, n, a));
            return t.isGeneratorFunction(r)
              ? o
              : o.next().then(function(t) {
                  return t.done ? t.value : o.next();
                });
          }),
          x(E),
          (E[c] = 'Generator'),
          (E[o] = function() {
            return this;
          }),
          (E.toString = function() {
            return '[object Generator]';
          }),
          (t.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = _),
          (S.prototype = {
            constructor: S,
            reset: function(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(N),
                !t)
              )
                for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function(t) {
              if (this.done) throw t;
              var r = this;
              function a(n, a) {
                return (c.type = 'throw'), (c.arg = t), (r.next = n), a && ((r.method = 'next'), (r.arg = e)), !!a;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  c = i.completion;
                if ('root' === i.tryLoc) return a('end');
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, 'catchLoc'),
                    l = n.call(i, 'finallyLoc');
                  if (u && l) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!l) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (a.tryLoc <= this.prev && n.call(a, 'finallyLoc') && this.prev < a.finallyLoc) {
                  var o = a;
                  break;
                }
              }
              o && ('break' === t || 'continue' === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(i)
              );
            },
            complete: function(t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                m
              );
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), N(r), m;
              }
            },
            catch: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    N(r);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function(t, r, n) {
              return (
                (this.delegate = { iterator: _(t), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (a) {
        Function('r', 'regeneratorRuntime = r')(n);
      }
    },
    1120: function(t, e, r) {
      'use strict';
      r.r(e);
      var n = r(1117),
        a = r.n(n);
      function o(t, e, r, n, a, o, i) {
        try {
          var c = t[o](i),
            u = c.value;
        } catch (l) {
          return void r(l);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, a);
      }
      var i = r(6),
        c = r(0),
        u = r.n(c),
        l = r(32),
        s = r.n(l),
        h = r(40),
        f = r(3),
        p = function(t) {
          var e = t.id,
            r = t.name,
            n = t.type,
            a = t.breeds,
            o = (a = void 0 === a ? { primary: '' } : a).primary,
            i = t.photos,
            c = void 0 === i ? [] : i,
            l = t.contact,
            s = (l = void 0 === l ? { address: { city: '', state: '' } } : l).address,
            h = c.length ? c[0].small : 'http://placecorgi.com/300/300';
          return u.a.createElement(
            f.a,
            { to: '/details/'.concat(e), className: 'pet' },
            u.a.createElement('div', { className: 'image-container' }, u.a.createElement('img', { src: h, alt: r })),
            u.a.createElement(
              'div',
              { className: 'info' },
              u.a.createElement('h1', null, r),
              u.a.createElement(
                'h2',
                null,
                ''
                  .concat(n, ' - ')
                  .concat(o, ' - ')
                  .concat(s.city, ', ')
                  .concat(s.state),
              ),
            ),
          );
        },
        m = function(t) {
          var e = t.pets;
          return u.a.createElement(
            'div',
            { className: 'search' },
            0 === e.length
              ? u.a.createElement('h1', null, 'No pets found.')
              : e.map(function(t) {
                  var e = t.id,
                    r = Object(h.a)(t, ['id']);
                  return u.a.createElement(p, Object.assign({ key: e, id: e }, r));
                }),
          );
        },
        v = function(t, e, r) {
          var n = Object(c.useState)(e),
            a = Object(i.a)(n, 2),
            o = a[0],
            l = a[1],
            s = 'use-dropdown-'.concat(t.replace(' ', '').toLocaleLowerCase()),
            h = function(t) {
              var e = t.target.value;
              return l(e);
            };
          return [
            o,
            l,
            function() {
              return u.a.createElement(
                'label',
                { htmlFor: s },
                t,
                u.a.createElement(
                  'select',
                  { name: t, id: s, value: o, onChange: h, onBlur: h, disabled: 0 === r.length },
                  u.a.createElement('option', { value: 'All' }, 'All'),
                  r.map(function(t, e) {
                    return u.a.createElement('option', { value: t, key: e }, t);
                  }),
                ),
              );
            },
          ];
        },
        d = r(7);
      r.d(e, 'SearchParams', function() {
        return y;
      });
      var y = function() {
        var t = Object(c.useState)('Seattle, WA'),
          e = Object(i.a)(t, 2),
          r = e[0],
          n = e[1],
          h = Object(c.useState)([]),
          f = Object(i.a)(h, 2),
          p = f[0],
          y = f[1],
          g = v('Animal', 'all', l.ANIMALS),
          w = Object(i.a)(g, 3),
          b = w[0],
          E = w[2],
          x = v('Breed', 'dog', p),
          L = Object(i.a)(x, 3),
          O = L[0],
          j = L[1],
          N = L[2],
          S = Object(c.useState)([]),
          _ = Object(i.a)(S, 2),
          k = _[0],
          P = _[1],
          F = Object(c.useContext)(d.a),
          A = Object(i.a)(F, 2),
          G = A[0],
          C = A[1],
          T = (function() {
            var t,
              e = ((t = a.a.mark(function t(e) {
                var r, n;
                return a.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), s.a.animals(e);
                      case 2:
                        (r = t.sent), (n = r.animals), P(n || []);
                      case 5:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })),
              function() {
                var e = this,
                  r = arguments;
                return new Promise(function(n, a) {
                  var i = t.apply(e, r);
                  function c(t) {
                    o(i, n, a, c, u, 'next', t);
                  }
                  function u(t) {
                    o(i, n, a, c, u, 'throw', t);
                  }
                  c(void 0);
                });
              });
            return function(t) {
              return e.apply(this, arguments);
            };
          })();
        Object(c.useEffect)(
          function() {
            y([]),
              j(''),
              s.a.breeds(b).then(function(t) {
                var e = t.breeds;
                if (e) {
                  var r = e.map(function(t) {
                    return t.name;
                  });
                  y(r);
                }
              }, console.error);
          },
          [b, j],
        );
        var I = function(t) {
          var e = t.target.value;
          C(e);
        };
        return u.a.createElement(
          'div',
          { className: 'search-params' },
          u.a.createElement(
            'form',
            {
              action: '/',
              onSubmit: function(t) {
                t.preventDefault(), T({ location: r, breed: O, type: b });
              },
            },
            u.a.createElement(
              'label',
              { htmlFor: 'location' },
              'Location',
              u.a.createElement('input', {
                type: 'text',
                name: 'location',
                id: 'location',
                value: r,
                onChange: function(t) {
                  var e = t.target.value;
                  return n(e);
                },
                placeholder: 'location',
              }),
            ),
            u.a.createElement(E, null),
            u.a.createElement(N, null),
            u.a.createElement(
              'label',
              { htmlFor: 'theme' },
              'Theme',
              u.a.createElement(
                'select',
                { name: 'theme', id: 'theme', value: G, onChange: I, onBlur: I },
                u.a.createElement('option', { value: 'pere' }, 'peru'),
                u.a.createElement('option', { value: '#bada55' }, 'bada55'),
                u.a.createElement('option', { value: 'mediumorchid' }, 'medium orchid'),
              ),
            ),
            u.a.createElement('button', { type: 'submit', style: { backgroundColor: G } }, 'Submit'),
          ),
          u.a.createElement(m, { pets: k }),
        );
      };
      e.default = y;
    },
  },
]);
//# sourceMappingURL=4.43300b7b.chunk.js.map
