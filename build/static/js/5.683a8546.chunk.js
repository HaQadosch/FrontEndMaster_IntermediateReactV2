(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    1121: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6);
      function c(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              }),
            )),
            n.forEach(function(t) {
              c(e, t, a[t]);
            });
        }
        return e;
      }
      var l = a(40),
        o = a(0),
        i = a.n(o),
        u = a(32),
        s = a.n(u),
        m = function(e) {
          var t = e.photos,
            a = Object(o.useState)(t),
            c = Object(n.a)(a, 2),
            l = c[0],
            u = c[1],
            s = Object(o.useState)(0),
            m = Object(n.a)(s, 2),
            b = m[0],
            p = m[1];
          Object(o.useEffect)(
            function() {
              u(
                t.map(function(e) {
                  return r({ large: 'http://placecorgi.com/600/600', small: 'http://placecorgi.com/300/300' }, e);
                }),
              );
            },
            [t],
          );
          var f = function(e) {
            return function(t) {
              t.target;
              p(e);
            };
          };
          return i.a.createElement(
            'div',
            { className: 'carousel' },
            i.a.createElement('img', { src: l[b].large, alt: 'active pet' }),
            i.a.createElement(
              'div',
              { className: 'carousel-smaller' },
              l.map(function(e, t) {
                return i.a.createElement('img', {
                  key: t,
                  src: e.small,
                  alt: 'small pet',
                  className: t === b ? 'active' : '',
                  onClick: f(t),
                });
              }),
            ),
          );
        },
        b = a(7),
        p = a(3);
      a.d(t, 'Details', function() {
        return O;
      });
      var f = Object(o.lazy)(function() {
          return a.e(6).then(a.bind(null, 1119));
        }),
        d = function(e, t) {
          var a = t.contact.address,
            n = a.city,
            c = a.state,
            o = t.breeds.primary;
          return r({}, e, Object(l.a)(t, ['contact', 'breeds']), { city: n, state: c, primary: o });
        },
        O = function(e) {
          var t = e.id,
            a = void 0 === t ? '' : t,
            c = Object(o.useState)(!0),
            r = Object(n.a)(c, 2),
            l = r[0],
            u = r[1],
            O = Object(o.useState)(),
            j = Object(n.a)(O, 2)[1],
            E = Object(o.useContext)(b.a),
            y = Object(n.a)(E, 1)[0],
            v = Object(o.useState)(!1),
            h = Object(n.a)(v, 2),
            g = h[0],
            k = h[1],
            w = function() {
              k(!g);
            },
            S = Object(o.useReducer)(d, {
              url: '',
              name: '',
              type: '',
              description: '',
              photos: [],
              city: '',
              state: '',
              primary: '',
            }),
            C = Object(n.a)(S, 2),
            N = C[0],
            P = N.name,
            D = N.type,
            J = N.city,
            x = N.state,
            z = N.description,
            A = N.photos,
            I = N.primary,
            L = N.url,
            R = C[1];
          return (
            Object(o.useEffect)(
              function() {
                s.a
                  .animal(parseInt(a))
                  .then(function(e) {
                    var t = e.animal;
                    R(t), u(!1);
                  })
                  .catch(function(e) {
                    return j(e);
                  });
              },
              [a],
            ),
            l
              ? i.a.createElement(
                  'h1',
                  null,
                  i.a.createElement('span', { role: 'img', 'aria-label': 'sand-glass' }, '\u231b'),
                  'Loading...',
                )
              : i.a.createElement(
                  'div',
                  { className: 'details' },
                  i.a.createElement(m, { photos: A }),
                  i.a.createElement(
                    'div',
                    null,
                    i.a.createElement('h1', null, P),
                    i.a.createElement(
                      'h2',
                      null,
                      ''
                        .concat(D, ' - ')
                        .concat(I, ' - ')
                        .concat(J, ', ')
                        .concat(x),
                    ),
                    i.a.createElement('button', { onClick: w, style: { backgroundColor: y } }, 'Adopt '.concat(P)),
                    i.a.createElement('p', null, z),
                    g
                      ? i.a.createElement(
                          f,
                          null,
                          i.a.createElement(
                            'div',
                            null,
                            i.a.createElement('h1', null, 'Would you like to adopt ', P, ' ?'),
                            i.a.createElement(
                              'div',
                              { className: 'buttons' },
                              i.a.createElement(
                                'button',
                                {
                                  onClick: function() {
                                    return Object(p.c)(L);
                                  },
                                },
                                'Yes',
                                ' ',
                                i.a.createElement('span', { role: 'img', 'aria-label': 'shiny heart' }, '\ud83d\udc96'),
                              ),
                              i.a.createElement(
                                'button',
                                { onClick: w },
                                'No',
                                ' ',
                                i.a.createElement(
                                  'span',
                                  { role: 'img', 'aria-label': 'broken heart' },
                                  '\ud83d\udc94',
                                ),
                              ),
                            ),
                          ),
                        )
                      : null,
                  ),
                )
          );
        };
      t.default = O;
    },
  },
]);
//# sourceMappingURL=5.683a8546.chunk.js.map
