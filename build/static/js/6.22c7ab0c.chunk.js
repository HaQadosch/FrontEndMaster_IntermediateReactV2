(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    1119: function(e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, 'Modal', function() {
          return o;
        });
      var t = n(0),
        c = n.n(t),
        u = n(12),
        o = function(e) {
          var r = e.children,
            n = Object(t.useRef)();
          if (!n.current) {
            var o = document.createElement('div');
            n.current = o;
          }
          return (
            Object(t.useEffect)(function() {
              var e = document.querySelector('#modal');
              return (
                e && n.current && e.appendChild(n.current),
                function() {
                  e && n.current && e.removeChild(n.current);
                }
              );
            }, []),
            Object(u.createPortal)(c.a.createElement('div', null, r), n.current)
          );
        };
      r.default = o;
    },
  },
]);
//# sourceMappingURL=6.22c7ab0c.chunk.js.map
