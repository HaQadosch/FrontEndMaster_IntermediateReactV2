(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    13: function(e, n, t) {
      e.exports = t(29);
    },
    20: function(e, n, t) {},
    28: function(e, n, t) {},
    29: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        o = t(10),
        c = (t(20), t(6)),
        i = t(3),
        l = (t(28), t(7)),
        u = t(4),
        s = t(1),
        d = '#d9c148';
      function b() {
        var e = Object(u.a)([
          '\n          font-size: 4rem;\n          &:hover {\n            text-decoration: underline;\n            animation: 1s ',
          ' linear infinite reverse;\n          }\n          display: inline-block;\n          animation: 5s ',
          ' linear infinite;\n        ',
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(u.a)(['\n        background-color: ', ';\n        padding: 15px;\n      ']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = Object(u.a)(['\n  to {\n    transform: rotate(360deg)\n  }\n']);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var v = Object(s.c)(f()),
        j = function() {
          return Object(s.b)(
            'header',
            { css: Object(s.a)(m(), d) },
            Object(s.b)(i.a, { to: '/' }, 'Adopt me !'),
            Object(s.b)('span', { css: Object(s.a)(b(), v, v), role: 'img', 'aria-label': 'logo' }, '\ud83d\udc29'),
          );
        },
        p = Object(a.lazy)(function() {
          return Promise.all([t.e(0), t.e(5)]).then(t.bind(null, 1121));
        }),
        O = Object(a.lazy)(function() {
          return Promise.all([t.e(0), t.e(4)]).then(t.bind(null, 1120));
        });
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      );
      Object(o.render)(
        r.a.createElement(function() {
          var e = Object(a.useState)('darkblue'),
            n = Object(c.a)(e, 2),
            t = n[0],
            o = n[1];
          return r.a.createElement(
            l.a.Provider,
            { value: [t, o] },
            r.a.createElement(
              'div',
              null,
              r.a.createElement(j, null),
              r.a.createElement(
                r.a.StrictMode,
                null,
                r.a.createElement(
                  a.Suspense,
                  { fallback: r.a.createElement('span', null, 'Loading...') },
                  r.a.createElement(
                    i.b,
                    null,
                    r.a.createElement(O, { path: '/' }),
                    r.a.createElement(p, { path: '/details/:id', id: '' }),
                  ),
                ),
              ),
            ),
          );
        }, null),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    7: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return r;
      });
      var a = t(0),
        r = Object(a.createContext)(['green', function(e) {}]);
    },
  },
  [[13, 2, 3]],
]);
//# sourceMappingURL=main.92d17211.chunk.js.map
