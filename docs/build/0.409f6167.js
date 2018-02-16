webpackJsonp([0], {
  1470: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(0),
      i = n.n(r),
      o = n(7),
      s = n.n(o),
      a = n(339),
      l = n.n(a),
      c = n(1472),
      u = (n.n(c), n(1473)),
      d = (n.n(u),
      Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
      p = (function() {
        function defineProperties(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(e, t, n) {
          return (
            t && defineProperties(e.prototype, t),
            n && defineProperties(e, n),
            e
          );
        };
      })();
    n(1476), n(1478);
    var h = {
        mode: 'jsx',
        lineNumbers: !1,
        lineWrapping: !0,
        smartIndent: !1,
        matchBrackets: !0,
        viewportMargin: 1 / 0,
      },
      f = 10,
      g = (function(e) {
        !(function _inherits(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(Editor, r['Component']);
        function Editor() {
          !(function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, Editor);
          var e = (function _possibleConstructorReturn(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(
            this,
            (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this),
          );
          return (e.handleChange = l()(e.handleChange.bind(e), f)), e;
        }
        return (
          p(Editor, [
            {
              key: 'shouldComponentUpdate',
              value: function shouldComponentUpdate() {
                return !1;
              },
            },
            {
              key: 'handleChange',
              value: function handleChange(e, t, n) {
                this.props.onChange(n);
              },
            },
            {
              key: 'render',
              value: function render() {
                var e = this.props.code,
                  t = this.context.config.highlightTheme,
                  n = d({}, h, { theme: t });
                return i.a.createElement(c.UnControlled, {
                  value: e,
                  onChange: this.handleChange,
                  options: n,
                });
              },
            },
          ]),
          Editor
        );
      })();
    (g.propTypes = {
      code: s.a.string.isRequired,
      onChange: s.a.func.isRequired,
    }),
      (g.contextTypes = { config: s.a.object.isRequired }),
      (t.default = g);
  },
  1471: function(e, t, n) {
    (r = function() {
      'use strict';
      var e = navigator.userAgent,
        t = navigator.platform,
        n = /gecko\/\d/i.test(e),
        r = /MSIE \d/.test(e),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        o = /Edge\/(\d+)/.exec(e),
        s = r || i || o,
        a = s && (r ? document.documentMode || 6 : +(o || i)[1]),
        l = !o && /WebKit\//.test(e),
        c = l && /Qt\/\d+\.\d+/.test(e),
        u = !o && /Chrome\//.test(e),
        d = /Opera\//.test(e),
        p = /Apple Computer/.test(navigator.vendor),
        h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        f = /PhantomJS/.test(e),
        g = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
        m = /Android/.test(e),
        v =
          g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        y = g || /Mac/.test(t),
        b = /\bCrOS\b/.test(e),
        C = /win/i.test(t),
        x = d && e.match(/Version\/(\d*\.\d*)/);
      x && (x = Number(x[1])), x && x >= 15 && ((d = !1), (l = !0));
      var w = y && (c || (d && (null == x || x < 12.11))),
        S = n || (s && a >= 9);
      function classTest(e) {
        return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
      }
      var k = function(e, t) {
        var n = e.className,
          r = classTest(t).exec(n);
        if (r) {
          var i = n.slice(r.index + r[0].length);
          e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
        }
      };
      function removeChildren(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function removeChildrenAndAdd(e, t) {
        return removeChildren(e).appendChild(t);
      }
      function elt(e, t, n, r) {
        var i = document.createElement(e);
        if (
          (n && (i.className = n),
          r && (i.style.cssText = r),
          'string' == typeof t)
        )
          i.appendChild(document.createTextNode(t));
        else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
        return i;
      }
      function eltP(e, t, n, r) {
        var i = elt(e, t, n, r);
        return i.setAttribute('role', 'presentation'), i;
      }
      var L;
      L = document.createRange
        ? function(e, t, n, r) {
            var i = document.createRange();
            return i.setEnd(r || e, n), i.setStart(e, t), i;
          }
        : function(e, t, n) {
            var r = document.body.createTextRange();
            try {
              r.moveToElementText(e.parentNode);
            } catch (e) {
              return r;
            }
            return (
              r.collapse(!0),
              r.moveEnd('character', n),
              r.moveStart('character', t),
              r
            );
          };
      function contains(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t);
        do {
          if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
        } while ((t = t.parentNode));
      }
      function activeElt() {
        var e;
        try {
          e = document.activeElement;
        } catch (t) {
          e = document.body || null;
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement;
        return e;
      }
      function addClass(e, t) {
        var n = e.className;
        classTest(t).test(n) || (e.className += (n ? ' ' : '') + t);
      }
      function joinClasses(e, t) {
        for (var n = e.split(' '), r = 0; r < n.length; r++)
          n[r] && !classTest(n[r]).test(t) && (t += ' ' + n[r]);
        return t;
      }
      var M = function(e) {
        e.select();
      };
      g
        ? (M = function(e) {
            (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : s &&
          (M = function(e) {
            try {
              e.select();
            } catch (e) {}
          });
      function bind(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, t);
        };
      }
      function copyObj(e, t, n) {
        t || (t = {});
        for (var r in e)
          !e.hasOwnProperty(r) ||
            (!1 === n && t.hasOwnProperty(r)) ||
            (t[r] = e[r]);
        return t;
      }
      function countColumn(e, t, n, r, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = r || 0, s = i || 0; ; ) {
          var a = e.indexOf('\t', o);
          if (a < 0 || a >= t) return s + (t - o);
          (s += a - o), (s += n - s % n), (o = a + 1);
        }
      }
      var T = function() {
        this.id = null;
      };
      T.prototype.set = function(e, t) {
        clearTimeout(this.id), (this.id = setTimeout(t, e));
      };
      function indexOf(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
        return -1;
      }
      var O = 30,
        P = {
          toString: function() {
            return 'CodeMirror.Pass';
          },
        },
        A = { scroll: !1 },
        N = { origin: '*mouse' },
        D = { origin: '+move' };
      function findColumn(e, t, n) {
        for (var r = 0, i = 0; ; ) {
          var o = e.indexOf('\t', r);
          -1 == o && (o = e.length);
          var s = o - r;
          if (o == e.length || i + s >= t) return r + Math.min(s, t - i);
          if (((i += o - r), (r = o + 1), (i += n - i % n) >= t)) return r;
        }
      }
      var H = [''];
      function spaceStr(e) {
        for (; H.length <= e; ) H.push(lst(H) + ' ');
        return H[e];
      }
      function lst(e) {
        return e[e.length - 1];
      }
      function map(e, t) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
        return n;
      }
      function nothing() {}
      function createObj(e, t) {
        var n;
        return (
          Object.create
            ? (n = Object.create(e))
            : ((nothing.prototype = e), (n = new nothing())),
          t && copyObj(t, n),
          n
        );
      }
      var W = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function isWordCharBasic(e) {
        return (
          /\w/.test(e) ||
          (e > '' && (e.toUpperCase() != e.toLowerCase() || W.test(e)))
        );
      }
      function isWordChar(e, t) {
        return t
          ? !!(t.source.indexOf('\\w') > -1 && isWordCharBasic(e)) || t.test(e)
          : isWordCharBasic(e);
      }
      function isEmpty(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
        return !0;
      }
      var E = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function isExtendingChar(e) {
        return e.charCodeAt(0) >= 768 && E.test(e);
      }
      function skipExtendingChars(e, t, n) {
        for (; (n < 0 ? t > 0 : t < e.length) && isExtendingChar(e.charAt(t)); )
          t += n;
        return t;
      }
      function findFirst(e, t, n) {
        for (var r = t > n ? -1 : 1; ; ) {
          if (t == n) return t;
          var i = (t + n) / 2,
            o = r < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == t) return e(o) ? t : n;
          e(o) ? (n = o) : (t = o + r);
        }
      }
      function getLine(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
          throw new Error(
            'There is no line ' + (t + e.first) + ' in the document.',
          );
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var i = n.children[r],
              o = i.chunkSize();
            if (t < o) {
              n = i;
              break;
            }
            t -= o;
          }
        return n.lines[t];
      }
      function getBetween(e, t, n) {
        var r = [],
          i = t.line;
        return (
          e.iter(t.line, n.line + 1, function(e) {
            var o = e.text;
            i == n.line && (o = o.slice(0, n.ch)),
              i == t.line && (o = o.slice(t.ch)),
              r.push(o),
              ++i;
          }),
          r
        );
      }
      function getLines(e, t, n) {
        var r = [];
        return (
          e.iter(t, n, function(e) {
            r.push(e.text);
          }),
          r
        );
      }
      function updateLineHeight(e, t) {
        var n = t - e.height;
        if (n) for (var r = e; r; r = r.parent) r.height += n;
      }
      function lineNo(e) {
        if (null == e.parent) return null;
        for (
          var t = e.parent, n = indexOf(t.lines, e), r = t.parent;
          r;
          t = r, r = r.parent
        )
          for (var i = 0; r.children[i] != t; ++i)
            n += r.children[i].chunkSize();
        return n + t.first;
      }
      function lineAtHeight(e, t) {
        var n = e.first;
        e: do {
          for (var r = 0; r < e.children.length; ++r) {
            var i = e.children[r],
              o = i.height;
            if (t < o) {
              e = i;
              continue e;
            }
            (t -= o), (n += i.chunkSize());
          }
          return n;
        } while (!e.lines);
        for (var s = 0; s < e.lines.length; ++s) {
          var a = e.lines[s].height;
          if (t < a) break;
          t -= a;
        }
        return n + s;
      }
      function isLine(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function lineNumberFor(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function Pos(e, t, n) {
        if ((void 0 === n && (n = null), !(this instanceof Pos)))
          return new Pos(e, t, n);
        (this.line = e), (this.ch = t), (this.sticky = n);
      }
      function cmp(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function equalCursorPos(e, t) {
        return e.sticky == t.sticky && 0 == cmp(e, t);
      }
      function copyPos(e) {
        return Pos(e.line, e.ch);
      }
      function maxPos(e, t) {
        return cmp(e, t) < 0 ? t : e;
      }
      function minPos(e, t) {
        return cmp(e, t) < 0 ? e : t;
      }
      function clipLine(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function clipPos(e, t) {
        if (t.line < e.first) return Pos(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n
          ? Pos(n, getLine(e, n).text.length)
          : (function clipToLen(e, t) {
              var n = e.ch;
              return null == n || n > t
                ? Pos(e.line, t)
                : n < 0 ? Pos(e.line, 0) : e;
            })(t, getLine(e, t.line).text.length);
      }
      function clipPosArray(e, t) {
        for (var n = [], r = 0; r < t.length; r++) n[r] = clipPos(e, t[r]);
        return n;
      }
      var I = !1,
        F = !1;
      function MarkedSpan(e, t, n) {
        (this.marker = e), (this.from = t), (this.to = n);
      }
      function getMarkedSpanFor(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t) return r;
          }
      }
      function removeMarkedSpan(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r]);
        return n;
      }
      function stretchSpansOverChange(e, t) {
        if (t.full) return null;
        var n = isLine(e, t.from.line) && getLine(e, t.from.line).markedSpans,
          r = isLine(e, t.to.line) && getLine(e, t.to.line).markedSpans;
        if (!n && !r) return null;
        var i = t.from.ch,
          o = t.to.ch,
          s = 0 == cmp(t.from, t.to),
          a = (function markedSpansBefore(e, t, n) {
            var r;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  s = o.marker;
                if (
                  null == o.from ||
                  (s.inclusiveLeft ? o.from <= t : o.from < t) ||
                  (o.from == t &&
                    'bookmark' == s.type &&
                    (!n || !o.marker.insertLeft))
                ) {
                  var a =
                    null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                  (r || (r = [])).push(
                    new MarkedSpan(s, o.from, a ? null : o.to),
                  );
                }
              }
            return r;
          })(n, i, s),
          l = (function markedSpansAfter(e, t, n) {
            var r;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  s = o.marker;
                if (
                  null == o.to ||
                  (s.inclusiveRight ? o.to >= t : o.to > t) ||
                  (o.from == t &&
                    'bookmark' == s.type &&
                    (!n || o.marker.insertLeft))
                ) {
                  var a =
                    null == o.from ||
                    (s.inclusiveLeft ? o.from <= t : o.from < t);
                  (r || (r = [])).push(
                    new MarkedSpan(
                      s,
                      a ? null : o.from - t,
                      null == o.to ? null : o.to - t,
                    ),
                  );
                }
              }
            return r;
          })(r, o, s),
          c = 1 == t.text.length,
          u = lst(t.text).length + (c ? i : 0);
        if (a)
          for (var d = 0; d < a.length; ++d) {
            var p = a[d];
            if (null == p.to) {
              var h = getMarkedSpanFor(l, p.marker);
              h ? c && (p.to = null == h.to ? null : h.to + u) : (p.to = i);
            }
          }
        if (l)
          for (var f = 0; f < l.length; ++f) {
            var g = l[f];
            if ((null != g.to && (g.to += u), null == g.from)) {
              getMarkedSpanFor(a, g.marker) ||
                ((g.from = u), c && (a || (a = [])).push(g));
            } else (g.from += u), c && (a || (a = [])).push(g);
          }
        a && (a = clearEmptySpans(a)), l && l != a && (l = clearEmptySpans(l));
        var m = [a];
        if (!c) {
          var v,
            y = t.text.length - 2;
          if (y > 0 && a)
            for (var b = 0; b < a.length; ++b)
              null == a[b].to &&
                (v || (v = [])).push(new MarkedSpan(a[b].marker, null, null));
          for (var C = 0; C < y; ++C) m.push(v);
          m.push(l);
        }
        return m;
      }
      function clearEmptySpans(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          null != n.from &&
            n.from == n.to &&
            !1 !== n.marker.clearWhenEmpty &&
            e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function detachMarkedSpans(e) {
        var t = e.markedSpans;
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function attachMarkedSpans(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function extraLeft(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function extraRight(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function compareCollapsedMarkers(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n) return n;
        var r = e.find(),
          i = t.find(),
          o = cmp(r.from, i.from) || extraLeft(e) - extraLeft(t);
        if (o) return -o;
        var s = cmp(r.to, i.to) || extraRight(e) - extraRight(t);
        return s || t.id - e.id;
      }
      function collapsedSpanAtSide(e, t) {
        var n,
          r = F && e.markedSpans;
        if (r)
          for (var i = void 0, o = 0; o < r.length; ++o)
            (i = r[o]).marker.collapsed &&
              null == (t ? i.from : i.to) &&
              (!n || compareCollapsedMarkers(n, i.marker) < 0) &&
              (n = i.marker);
        return n;
      }
      function collapsedSpanAtStart(e) {
        return collapsedSpanAtSide(e, !0);
      }
      function collapsedSpanAtEnd(e) {
        return collapsedSpanAtSide(e, !1);
      }
      function conflictingCollapsedRange(e, t, n, r, i) {
        var o = getLine(e, t),
          s = F && o.markedSpans;
        if (s)
          for (var a = 0; a < s.length; ++a) {
            var l = s[a];
            if (l.marker.collapsed) {
              var c = l.marker.find(0),
                u = cmp(c.from, n) || extraLeft(l.marker) - extraLeft(i),
                d = cmp(c.to, r) || extraRight(l.marker) - extraRight(i);
              if (
                !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                ((u <= 0 &&
                  (l.marker.inclusiveRight && i.inclusiveLeft
                    ? cmp(c.to, n) >= 0
                    : cmp(c.to, n) > 0)) ||
                  (u >= 0 &&
                    (l.marker.inclusiveRight && i.inclusiveLeft
                      ? cmp(c.from, r) <= 0
                      : cmp(c.from, r) < 0)))
              )
                return !0;
            }
          }
      }
      function visualLine(e) {
        for (var t; (t = collapsedSpanAtStart(e)); ) e = t.find(-1, !0).line;
        return e;
      }
      function visualLineNo(e, t) {
        var n = getLine(e, t),
          r = visualLine(n);
        return n == r ? t : lineNo(r);
      }
      function visualLineEndNo(e, t) {
        if (t > e.lastLine()) return t;
        var n,
          r = getLine(e, t);
        if (!lineIsHidden(e, r)) return t;
        for (; (n = collapsedSpanAtEnd(r)); ) r = n.find(1, !0).line;
        return lineNo(r) + 1;
      }
      function lineIsHidden(e, t) {
        var n = F && t.markedSpans;
        if (n)
          for (var r = void 0, i = 0; i < n.length; ++i)
            if ((r = n[i]).marker.collapsed) {
              if (null == r.from) return !0;
              if (
                !r.marker.widgetNode &&
                0 == r.from &&
                r.marker.inclusiveLeft &&
                lineIsHiddenInner(e, t, r)
              )
                return !0;
            }
      }
      function lineIsHiddenInner(e, t, n) {
        if (null == n.to) {
          var r = n.marker.find(1, !0);
          return lineIsHiddenInner(
            e,
            r.line,
            getMarkedSpanFor(r.line.markedSpans, n.marker),
          );
        }
        if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
          if (
            (i = t.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == n.to &&
            (null == i.to || i.to != n.from) &&
            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            lineIsHiddenInner(e, t, i)
          )
            return !0;
      }
      function heightAtLine(e) {
        for (
          var t = 0, n = (e = visualLine(e)).parent, r = 0;
          r < n.lines.length;
          ++r
        ) {
          var i = n.lines[r];
          if (i == e) break;
          t += i.height;
        }
        for (var o = n.parent; o; n = o, o = n.parent)
          for (var s = 0; s < o.children.length; ++s) {
            var a = o.children[s];
            if (a == n) break;
            t += a.height;
          }
        return t;
      }
      function lineLength(e) {
        if (0 == e.height) return 0;
        for (var t, n = e.text.length, r = e; (t = collapsedSpanAtStart(r)); ) {
          var i = t.find(0, !0);
          (r = i.from.line), (n += i.from.ch - i.to.ch);
        }
        for (r = e; (t = collapsedSpanAtEnd(r)); ) {
          var o = t.find(0, !0);
          (n -= r.text.length - o.from.ch),
            (n += (r = o.to.line).text.length - o.to.ch);
        }
        return n;
      }
      function findMaxLine(e) {
        var t = e.display,
          n = e.doc;
        (t.maxLine = getLine(n, n.first)),
          (t.maxLineLength = lineLength(t.maxLine)),
          (t.maxLineChanged = !0),
          n.iter(function(e) {
            var n = lineLength(e);
            n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
          });
      }
      var B = null;
      function getBidiPartAt(e, t, n) {
        var r;
        B = null;
        for (var i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.from < t && o.to > t) return i;
          o.to == t && (o.from != o.to && 'before' == n ? (r = i) : (B = i)),
            o.from == t &&
              (o.from != o.to && 'before' != n ? (r = i) : (B = i));
        }
        return null != r ? r : B;
      }
      var z = (function() {
        var e =
            'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
          t =
            'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
        var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          r = /[stwN]/,
          i = /[LRr]/,
          o = /[Lb1n]/,
          s = /[1n]/;
        function BidiSpan(e, t, n) {
          (this.level = e), (this.from = t), (this.to = n);
        }
        return function(a, l) {
          var c = 'ltr' == l ? 'L' : 'R';
          if (0 == a.length || ('ltr' == l && !n.test(a))) return !1;
          for (var u = a.length, d = [], p = 0; p < u; ++p)
            d.push(
              (h = a.charCodeAt(p)) <= 247
                ? e.charAt(h)
                : 1424 <= h && h <= 1524
                  ? 'R'
                  : 1536 <= h && h <= 1785
                    ? t.charAt(h - 1536)
                    : 1774 <= h && h <= 2220
                      ? 'r'
                      : 8192 <= h && h <= 8203 ? 'w' : 8204 == h ? 'b' : 'L',
            );
          for (var h, f = 0, g = c; f < u; ++f) {
            var m = d[f];
            'm' == m ? (d[f] = g) : (g = m);
          }
          for (var v = 0, y = c; v < u; ++v) {
            var b = d[v];
            '1' == b && 'r' == y
              ? (d[v] = 'n')
              : i.test(b) && ((y = b), 'r' == b && (d[v] = 'R'));
          }
          for (var C = 1, x = d[0]; C < u - 1; ++C) {
            var w = d[C];
            '+' == w && '1' == x && '1' == d[C + 1]
              ? (d[C] = '1')
              : ',' != w ||
                x != d[C + 1] ||
                ('1' != x && 'n' != x) ||
                (d[C] = x),
              (x = w);
          }
          for (var S = 0; S < u; ++S) {
            var k = d[S];
            if (',' == k) d[S] = 'N';
            else if ('%' == k) {
              var L = void 0;
              for (L = S + 1; L < u && '%' == d[L]; ++L);
              for (
                var M =
                    (S && '!' == d[S - 1]) || (L < u && '1' == d[L])
                      ? '1'
                      : 'N',
                  T = S;
                T < L;
                ++T
              )
                d[T] = M;
              S = L - 1;
            }
          }
          for (var O = 0, P = c; O < u; ++O) {
            var A = d[O];
            'L' == P && '1' == A ? (d[O] = 'L') : i.test(A) && (P = A);
          }
          for (var N = 0; N < u; ++N)
            if (r.test(d[N])) {
              var D = void 0;
              for (D = N + 1; D < u && r.test(d[D]); ++D);
              for (
                var H = 'L' == (N ? d[N - 1] : c),
                  W = H == ('L' == (D < u ? d[D] : c)) ? (H ? 'L' : 'R') : c,
                  E = N;
                E < D;
                ++E
              )
                d[E] = W;
              N = D - 1;
            }
          for (var I, F = [], B = 0; B < u; )
            if (o.test(d[B])) {
              var z = B;
              for (++B; B < u && o.test(d[B]); ++B);
              F.push(new BidiSpan(0, z, B));
            } else {
              var R = B,
                V = F.length;
              for (++B; B < u && 'L' != d[B]; ++B);
              for (var U = R; U < B; )
                if (s.test(d[U])) {
                  R < U && F.splice(V, 0, new BidiSpan(1, R, U));
                  var j = U;
                  for (++U; U < B && s.test(d[U]); ++U);
                  F.splice(V, 0, new BidiSpan(2, j, U)), (R = U);
                } else ++U;
              R < B && F.splice(V, 0, new BidiSpan(1, R, B));
            }
          return (
            'ltr' == l &&
              (1 == F[0].level &&
                (I = a.match(/^\s+/)) &&
                ((F[0].from = I[0].length),
                F.unshift(new BidiSpan(0, 0, I[0].length))),
              1 == lst(F).level &&
                (I = a.match(/\s+$/)) &&
                ((lst(F).to -= I[0].length),
                F.push(new BidiSpan(0, u - I[0].length, u)))),
            'rtl' == l ? F.reverse() : F
          );
        };
      })();
      function getOrder(e, t) {
        var n = e.order;
        return null == n && (n = e.order = z(e.text, t)), n;
      }
      var R = [],
        V = function(e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n, !1);
          else if (e.attachEvent) e.attachEvent('on' + t, n);
          else {
            var r = e._handlers || (e._handlers = {});
            r[t] = (r[t] || R).concat(n);
          }
        };
      function getHandlers(e, t) {
        return (e._handlers && e._handlers[t]) || R;
      }
      function off(e, t, n) {
        if (e.removeEventListener) e.removeEventListener(t, n, !1);
        else if (e.detachEvent) e.detachEvent('on' + t, n);
        else {
          var r = e._handlers,
            i = r && r[t];
          if (i) {
            var o = indexOf(i, n);
            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function signal(e, t) {
        var n = getHandlers(e, t);
        if (n.length)
          for (
            var r = Array.prototype.slice.call(arguments, 2), i = 0;
            i < n.length;
            ++i
          )
            n[i].apply(null, r);
      }
      function signalDOMEvent(e, t, n) {
        return (
          'string' == typeof t &&
            (t = {
              type: t,
              preventDefault: function() {
                this.defaultPrevented = !0;
              },
            }),
          signal(e, n || t.type, e, t),
          e_defaultPrevented(t) || t.codemirrorIgnore
        );
      }
      function signalCursorActivity(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (
            var n =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              r = 0;
            r < t.length;
            ++r
          )
            -1 == indexOf(n, t[r]) && n.push(t[r]);
      }
      function hasHandler(e, t) {
        return getHandlers(e, t).length > 0;
      }
      function eventMixin(e) {
        (e.prototype.on = function(e, t) {
          V(this, e, t);
        }),
          (e.prototype.off = function(e, t) {
            off(this, e, t);
          });
      }
      function e_preventDefault(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      }
      function e_stopPropagation(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
      }
      function e_defaultPrevented(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue;
      }
      function e_stop(e) {
        e_preventDefault(e), e_stopPropagation(e);
      }
      function e_target(e) {
        return e.target || e.srcElement;
      }
      function e_button(e) {
        var t = e.which;
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
          y && e.ctrlKey && 1 == t && (t = 3),
          t
        );
      }
      var U,
        j = (function() {
          if (s && a < 9) return !1;
          var e = elt('div');
          return 'draggable' in e || 'dragDrop' in e;
        })();
      function zeroWidthElement(e) {
        if (null == U) {
          var t = elt('span', '​');
          removeChildrenAndAdd(
            e,
            elt('span', [t, document.createTextNode('x')]),
          ),
            0 != e.firstChild.offsetHeight &&
              (U = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(s && a < 8));
        }
        var n = U
          ? elt('span', '​')
          : elt(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px',
            );
        return n.setAttribute('cm-text', ''), n;
      }
      var G;
      function hasBadBidiRects(e) {
        if (null != G) return G;
        var t = removeChildrenAndAdd(e, document.createTextNode('AخA')),
          n = L(t, 0, 1).getBoundingClientRect(),
          r = L(t, 1, 2).getBoundingClientRect();
        return (
          removeChildren(e),
          !(!n || n.left == n.right) && (G = r.right - n.right < 3)
        );
      }
      var K =
          3 != '\n\nb'.split(/\n/).length
            ? function(e) {
                for (var t = 0, n = [], r = e.length; t <= r; ) {
                  var i = e.indexOf('\n', t);
                  -1 == i && (i = e.length);
                  var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                    s = o.indexOf('\r');
                  -1 != s
                    ? (n.push(o.slice(0, s)), (t += s + 1))
                    : (n.push(o), (t = i + 1));
                }
                return n;
              }
            : function(e) {
                return e.split(/\r\n?|\n/);
              },
        _ = window.getSelection
          ? function(e) {
              try {
                return e.selectionStart != e.selectionEnd;
              } catch (e) {
                return !1;
              }
            }
          : function(e) {
              var t;
              try {
                t = e.ownerDocument.selection.createRange();
              } catch (e) {}
              return (
                !(!t || t.parentElement() != e) &&
                0 != t.compareEndPoints('StartToEnd', t)
              );
            },
        $ = (function() {
          var e = elt('div');
          return (
            'oncopy' in e ||
            (e.setAttribute('oncopy', 'return;'), 'function' == typeof e.oncopy)
          );
        })(),
        q = null;
      var X = {},
        Y = {};
      function resolveMode(e) {
        if ('string' == typeof e && Y.hasOwnProperty(e)) e = Y[e];
        else if (e && 'string' == typeof e.name && Y.hasOwnProperty(e.name)) {
          var t = Y[e.name];
          'string' == typeof t && (t = { name: t }),
            ((e = createObj(t, e)).name = t.name);
        } else {
          if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return resolveMode('application/xml');
          if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return resolveMode('application/json');
        }
        return 'string' == typeof e ? { name: e } : e || { name: 'null' };
      }
      function getMode(e, t) {
        t = resolveMode(t);
        var n = X[t.name];
        if (!n) return getMode(e, 'text/plain');
        var r = n(e, t);
        if (Z.hasOwnProperty(t.name)) {
          var i = Z[t.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
        }
        if (
          ((r.name = t.name),
          t.helperType && (r.helperType = t.helperType),
          t.modeProps)
        )
          for (var s in t.modeProps) r[s] = t.modeProps[s];
        return r;
      }
      var Z = {};
      function extendMode(e, t) {
        copyObj(t, Z.hasOwnProperty(e) ? Z[e] : (Z[e] = {}));
      }
      function copyState(e, t) {
        if (!0 === t) return t;
        if (e.copyState) return e.copyState(t);
        var n = {};
        for (var r in t) {
          var i = t[r];
          i instanceof Array && (i = i.concat([])), (n[r] = i);
        }
        return n;
      }
      function innerMode(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
          (t = n.state), (e = n.mode);
        return n || { mode: e, state: t };
      }
      function startState(e, t, n) {
        return !e.startState || e.startState(t, n);
      }
      var Q = function(e, t, n) {
        (this.pos = this.start = 0),
          (this.string = e),
          (this.tabSize = t || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = n);
      };
      (Q.prototype.eol = function() {
        return this.pos >= this.string.length;
      }),
        (Q.prototype.sol = function() {
          return this.pos == this.lineStart;
        }),
        (Q.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0;
        }),
        (Q.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (Q.prototype.eat = function(e) {
          var t = this.string.charAt(this.pos);
          if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t;
        }),
        (Q.prototype.eatWhile = function(e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t;
        }),
        (Q.prototype.eatSpace = function() {
          for (
            var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos;
          return this.pos > e;
        }),
        (Q.prototype.skipToEnd = function() {
          this.pos = this.string.length;
        }),
        (Q.prototype.skipTo = function(e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return (this.pos = t), !0;
        }),
        (Q.prototype.backUp = function(e) {
          this.pos -= e;
        }),
        (Q.prototype.column = function() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = countColumn(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue,
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? countColumn(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (Q.prototype.indentation = function() {
          return (
            countColumn(this.string, null, this.tabSize) -
            (this.lineStart
              ? countColumn(this.string, this.lineStart, this.tabSize)
              : 0)
          );
        }),
        (Q.prototype.match = function(e, t, n) {
          if ('string' != typeof e) {
            var r = this.string.slice(this.pos).match(e);
            return r && r.index > 0
              ? null
              : (r && !1 !== t && (this.pos += r[0].length), r);
          }
          var i = function(e) {
            return n ? e.toLowerCase() : e;
          };
          if (i(this.string.substr(this.pos, e.length)) == i(e))
            return !1 !== t && (this.pos += e.length), !0;
        }),
        (Q.prototype.current = function() {
          return this.string.slice(this.start, this.pos);
        }),
        (Q.prototype.hideFirstChars = function(e, t) {
          this.lineStart += e;
          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }),
        (Q.prototype.lookAhead = function(e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }),
        (Q.prototype.baseToken = function() {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        });
      var J = function(e, t) {
          (this.state = e), (this.lookAhead = t);
        },
        ee = function(e, t, n, r) {
          (this.state = t),
            (this.doc = e),
            (this.line = n),
            (this.maxLookAhead = r || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      (ee.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }),
        (ee.prototype.baseToken = function(e) {
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= e; )
            this.baseTokenPos += 2;
          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - e,
          };
        }),
        (ee.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (ee.fromSaved = function(e, t, n) {
          return t instanceof J
            ? new ee(e, copyState(e.mode, t.state), n, t.lookAhead)
            : new ee(e, copyState(e.mode, t), n);
        }),
        (ee.prototype.save = function(e) {
          var t = !1 !== e ? copyState(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new J(t, this.maxLookAhead) : t;
        });
      function highlightLine(e, t, n, r) {
        var i = [e.state.modeGen],
          o = {};
        runMode(
          e,
          t.text,
          e.doc.mode,
          n,
          function(e, t) {
            return i.push(e, t);
          },
          o,
          r,
        );
        for (
          var s = n.state,
            a = function(r) {
              n.baseTokens = i;
              var a = e.state.overlays[r],
                l = 1,
                c = 0;
              (n.state = !0),
                runMode(
                  e,
                  t.text,
                  a.mode,
                  n,
                  function(e, t) {
                    for (var n = l; c < e; ) {
                      var r = i[l];
                      r > e && i.splice(l, 1, e, i[l + 1], r),
                        (l += 2),
                        (c = Math.min(e, r));
                    }
                    if (t)
                      if (a.opaque)
                        i.splice(n, l - n, e, 'overlay ' + t), (l = n + 2);
                      else
                        for (; n < l; n += 2) {
                          var o = i[n + 1];
                          i[n + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                        }
                  },
                  o,
                ),
                (n.state = s),
                (n.baseTokens = null),
                (n.baseTokenPos = 1);
            },
            l = 0;
          l < e.state.overlays.length;
          ++l
        )
          a(l);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function getLineStyles(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = getContextBefore(e, lineNo(t)),
            i =
              t.text.length > e.options.maxHighlightLength &&
              copyState(e.doc.mode, r.state),
            o = highlightLine(e, t, r);
          i && (r.state = i),
            (t.stateAfter = r.save(!i)),
            (t.styles = o.styles),
            o.classes
              ? (t.styleClasses = o.classes)
              : t.styleClasses && (t.styleClasses = null),
            n === e.doc.highlightFrontier &&
              (e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier,
              ));
        }
        return t.styles;
      }
      function getContextBefore(e, t, n) {
        var r = e.doc,
          i = e.display;
        if (!r.mode.startState) return new ee(r, !0, t);
        var o = (function findStartLine(e, t, n) {
            for (
              var r,
                i,
                o = e.doc,
                s = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                a = t;
              a > s;
              --a
            ) {
              if (a <= o.first) return o.first;
              var l = getLine(o, a - 1),
                c = l.stateAfter;
              if (
                c &&
                (!n || a + (c instanceof J ? c.lookAhead : 0) <= o.modeFrontier)
              )
                return a;
              var u = countColumn(l.text, null, e.options.tabSize);
              (null == i || r > u) && ((i = a - 1), (r = u));
            }
            return i;
          })(e, t, n),
          s = o > r.first && getLine(r, o - 1).stateAfter,
          a = s ? ee.fromSaved(r, s, o) : new ee(r, startState(r.mode), o);
        return (
          r.iter(o, t, function(n) {
            processLine(e, n.text, a);
            var r = a.line;
            (n.stateAfter =
              r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo)
                ? a.save()
                : null),
              a.nextLine();
          }),
          n && (r.modeFrontier = a.line),
          a
        );
      }
      function processLine(e, t, n, r) {
        var i = e.doc.mode,
          o = new Q(t, e.options.tabSize, n);
        for (
          o.start = o.pos = r || 0, '' == t && callBlankLine(i, n.state);
          !o.eol();

        )
          readToken(i, o, n.state), (o.start = o.pos);
      }
      function callBlankLine(e, t) {
        if (e.blankLine) return e.blankLine(t);
        if (e.innerMode) {
          var n = innerMode(e, t);
          return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
        }
      }
      function readToken(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
          r && (r[0] = innerMode(e, n).mode);
          var o = e.token(t, n);
          if (t.pos > t.start) return o;
        }
        throw new Error('Mode ' + e.name + ' failed to advance stream.');
      }
      var te = function(e, t, n) {
        (this.start = e.start),
          (this.end = e.pos),
          (this.string = e.current()),
          (this.type = t || null),
          (this.state = n);
      };
      function takeToken(e, t, n, r) {
        var i,
          o,
          s = e.doc,
          a = s.mode,
          l = getLine(s, (t = clipPos(s, t)).line),
          c = getContextBefore(e, t.line, n),
          u = new Q(l.text, e.options.tabSize, c);
        for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
          (u.start = u.pos),
            (i = readToken(a, u, c.state)),
            r && o.push(new te(u, i, copyState(s.mode, c.state)));
        return r ? o : new te(u, i, c.state);
      }
      function extractLineClasses(e, t) {
        if (e)
          for (;;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n) break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? 'bgClass' : 'textClass';
            null == t[r]
              ? (t[r] = n[2])
              : new RegExp('(?:^|s)' + n[2] + '(?:$|s)').test(t[r]) ||
                (t[r] += ' ' + n[2]);
          }
        return e;
      }
      function runMode(e, t, n, r, i, o, s) {
        var a = n.flattenSpans;
        null == a && (a = e.options.flattenSpans);
        var l,
          c = 0,
          u = null,
          d = new Q(t, e.options.tabSize, r),
          p = e.options.addModeClass && [null];
        for (
          '' == t && extractLineClasses(callBlankLine(n, r.state), o);
          !d.eol();

        ) {
          if (
            (d.pos > e.options.maxHighlightLength
              ? ((a = !1),
                s && processLine(e, t, r, d.pos),
                (d.pos = t.length),
                (l = null))
              : (l = extractLineClasses(readToken(n, d, r.state, p), o)),
            p)
          ) {
            var h = p[0].name;
            h && (l = 'm-' + (l ? h + ' ' + l : h));
          }
          if (!a || u != l) {
            for (; c < d.start; ) i((c = Math.min(d.start, c + 5e3)), u);
            u = l;
          }
          d.start = d.pos;
        }
        for (; c < d.pos; ) {
          var f = Math.min(d.pos, c + 5e3);
          i(f, u), (c = f);
        }
      }
      var ne = function(e, t, n) {
        (this.text = e),
          attachMarkedSpans(this, t),
          (this.height = n ? n(this) : 1);
      };
      (ne.prototype.lineNo = function() {
        return lineNo(this);
      }),
        eventMixin(ne);
      var re = {},
        ie = {};
      function interpretTokenStyle(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        var n = t.addModeClass ? ie : re;
        return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
      }
      function buildLineContent(e, t) {
        var n = eltP('span', null, null, l ? 'padding-right: .1px' : null),
          r = {
            pre: eltP('pre', [n], 'CodeMirror-line'),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: (s || l) && e.getOption('lineWrapping'),
          };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
          var o = i ? t.rest[i - 1] : t.line,
            a = void 0;
          (r.pos = 0),
            (r.addToken = buildToken),
            hasBadBidiRects(e.display.measure) &&
              (a = getOrder(o, e.doc.direction)) &&
              (r.addToken = buildTokenBadBidi(r.addToken, a)),
            (r.map = []);
          insertLineContent(
            o,
            r,
            getLineStyles(e, o, t != e.display.externalMeasured && lineNo(o)),
          ),
            o.styleClasses &&
              (o.styleClasses.bgClass &&
                (r.bgClass = joinClasses(
                  o.styleClasses.bgClass,
                  r.bgClass || '',
                )),
              o.styleClasses.textClass &&
                (r.textClass = joinClasses(
                  o.styleClasses.textClass,
                  r.textClass || '',
                ))),
            0 == r.map.length &&
              r.map.push(
                0,
                0,
                r.content.appendChild(zeroWidthElement(e.display.measure)),
              ),
            0 == i
              ? ((t.measure.map = r.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (l) {
          var c = r.content.lastChild;
          (/\bcm-tab\b/.test(c.className) ||
            (c.querySelector && c.querySelector('.cm-tab'))) &&
            (r.content.className = 'cm-tab-wrap-hack');
        }
        return (
          signal(e, 'renderLine', e, t.line, r.pre),
          r.pre.className &&
            (r.textClass = joinClasses(r.pre.className, r.textClass || '')),
          r
        );
      }
      function defaultSpecialCharPlaceholder(e) {
        var t = elt('span', '•', 'cm-invalidchar');
        return (
          (t.title = '\\u' + e.charCodeAt(0).toString(16)),
          t.setAttribute('aria-label', t.title),
          t
        );
      }
      function buildToken(e, t, n, r, i, o, l) {
        if (t) {
          var c,
            u = e.splitSpaces
              ? (function splitSpaces(e, t) {
                  if (e.length > 1 && !/  /.test(e)) return e;
                  for (var n = t, r = '', i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    ' ' != o ||
                      !n ||
                      (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                      (o = ' '),
                      (r += o),
                      (n = ' ' == o);
                  }
                  return r;
                })(t, e.trailingSpace)
              : t,
            d = e.cm.state.specialChars,
            p = !1;
          if (d.test(t)) {
            c = document.createDocumentFragment();
            for (var h = 0; ; ) {
              d.lastIndex = h;
              var f = d.exec(t),
                g = f ? f.index - h : t.length - h;
              if (g) {
                var m = document.createTextNode(u.slice(h, h + g));
                s && a < 9 ? c.appendChild(elt('span', [m])) : c.appendChild(m),
                  e.map.push(e.pos, e.pos + g, m),
                  (e.col += g),
                  (e.pos += g);
              }
              if (!f) break;
              h += g + 1;
              var v = void 0;
              if ('\t' == f[0]) {
                var y = e.cm.options.tabSize,
                  b = y - e.col % y;
                (v = c.appendChild(
                  elt('span', spaceStr(b), 'cm-tab'),
                )).setAttribute('role', 'presentation'),
                  v.setAttribute('cm-text', '\t'),
                  (e.col += b);
              } else
                '\r' == f[0] || '\n' == f[0]
                  ? ((v = c.appendChild(
                      elt('span', '\r' == f[0] ? '␍' : '␤', 'cm-invalidchar'),
                    )).setAttribute('cm-text', f[0]),
                    (e.col += 1))
                  : ((v = e.cm.options.specialCharPlaceholder(
                      f[0],
                    )).setAttribute('cm-text', f[0]),
                    s && a < 9
                      ? c.appendChild(elt('span', [v]))
                      : c.appendChild(v),
                    (e.col += 1));
              e.map.push(e.pos, e.pos + 1, v), e.pos++;
            }
          } else
            (e.col += t.length),
              (c = document.createTextNode(u)),
              e.map.push(e.pos, e.pos + t.length, c),
              s && a < 9 && (p = !0),
              (e.pos += t.length);
          if (
            ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
            n || r || i || p || l)
          ) {
            var C = n || '';
            r && (C += r), i && (C += i);
            var x = elt('span', [c], C, l);
            return o && (x.title = o), e.content.appendChild(x);
          }
          e.content.appendChild(c);
        }
      }
      function buildTokenBadBidi(e, t) {
        return function(n, r, i, o, s, a, l) {
          i = i ? i + ' cm-force-border' : 'cm-force-border';
          for (var c = n.pos, u = c + r.length; ; ) {
            for (
              var d = void 0, p = 0;
              p < t.length && !((d = t[p]).to > c && d.from <= c);
              p++
            );
            if (d.to >= u) return e(n, r, i, o, s, a, l);
            e(n, r.slice(0, d.to - c), i, o, null, a, l),
              (o = null),
              (r = r.slice(d.to - c)),
              (c = d.to);
          }
        };
      }
      function buildCollapsedSpan(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
          !r &&
            e.cm.display.input.needsContentAttribute &&
            (i || (i = e.content.appendChild(document.createElement('span'))),
            i.setAttribute('cm-marker', n.id)),
          i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
          (e.pos += t),
          (e.trailingSpace = !1);
      }
      function insertLineContent(e, t, n) {
        var r = e.markedSpans,
          i = e.text,
          o = 0;
        if (r)
          for (
            var s, a, l, c, u, d, p, h = i.length, f = 0, g = 1, m = '', v = 0;
            ;

          ) {
            if (v == f) {
              (l = c = u = d = a = ''), (p = null), (v = 1 / 0);
              for (var y = [], b = void 0, C = 0; C < r.length; ++C) {
                var x = r[C],
                  w = x.marker;
                'bookmark' == w.type && x.from == f && w.widgetNode
                  ? y.push(w)
                  : x.from <= f &&
                    (null == x.to ||
                      x.to > f ||
                      (w.collapsed && x.to == f && x.from == f))
                    ? (null != x.to &&
                        x.to != f &&
                        v > x.to &&
                        ((v = x.to), (c = '')),
                      w.className && (l += ' ' + w.className),
                      w.css && (a = (a ? a + ';' : '') + w.css),
                      w.startStyle && x.from == f && (u += ' ' + w.startStyle),
                      w.endStyle &&
                        x.to == v &&
                        (b || (b = [])).push(w.endStyle, x.to),
                      w.title && !d && (d = w.title),
                      w.collapsed &&
                        (!p || compareCollapsedMarkers(p.marker, w) < 0) &&
                        (p = x))
                    : x.from > f && v > x.from && (v = x.from);
              }
              if (b)
                for (var S = 0; S < b.length; S += 2)
                  b[S + 1] == v && (c += ' ' + b[S]);
              if (!p || p.from == f)
                for (var k = 0; k < y.length; ++k)
                  buildCollapsedSpan(t, 0, y[k]);
              if (p && (p.from || 0) == f) {
                if (
                  (buildCollapsedSpan(
                    t,
                    (null == p.to ? h + 1 : p.to) - f,
                    p.marker,
                    null == p.from,
                  ),
                  null == p.to)
                )
                  return;
                p.to == f && (p = !1);
              }
            }
            if (f >= h) break;
            for (var L = Math.min(h, v); ; ) {
              if (m) {
                var M = f + m.length;
                if (!p) {
                  var T = M > L ? m.slice(0, L - f) : m;
                  t.addToken(
                    t,
                    T,
                    s ? s + l : l,
                    u,
                    f + T.length == v ? c : '',
                    d,
                    a,
                  );
                }
                if (M >= L) {
                  (m = m.slice(L - f)), (f = L);
                  break;
                }
                (f = M), (u = '');
              }
              (m = i.slice(o, (o = n[g++]))),
                (s = interpretTokenStyle(n[g++], t.cm.options));
            }
          }
        else
          for (var O = 1; O < n.length; O += 2)
            t.addToken(
              t,
              i.slice(o, (o = n[O])),
              interpretTokenStyle(n[O + 1], t.cm.options),
            );
      }
      function LineView(e, t, n) {
        (this.line = t),
          (this.rest = (function visualLineContinued(e) {
            for (var t, n; (t = collapsedSpanAtEnd(e)); )
              (e = t.find(1, !0).line), (n || (n = [])).push(e);
            return n;
          })(t)),
          (this.size = this.rest ? lineNo(lst(this.rest)) - n + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = lineIsHidden(e, t));
      }
      function buildViewArray(e, t, n) {
        for (var r, i = [], o = t; o < n; o = r) {
          var s = new LineView(e.doc, getLine(e.doc, o), o);
          (r = o + s.size), i.push(s);
        }
        return i;
      }
      var oe = null;
      var se = null;
      function signalLater(e, t) {
        var n = getHandlers(e, t);
        if (n.length) {
          var r,
            i = Array.prototype.slice.call(arguments, 2);
          oe
            ? (r = oe.delayedCallbacks)
            : se ? (r = se) : ((r = se = []), setTimeout(fireOrphanDelayed, 0));
          for (
            var o = function(e) {
                r.push(function() {
                  return n[e].apply(null, i);
                });
              },
              s = 0;
            s < n.length;
            ++s
          )
            o(s);
        }
      }
      function fireOrphanDelayed() {
        var e = se;
        se = null;
        for (var t = 0; t < e.length; ++t) e[t]();
      }
      function updateLineForChanges(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
          var o = t.changes[i];
          'text' == o
            ? updateLineText(e, t)
            : 'gutter' == o
              ? updateLineGutter(e, t, n, r)
              : 'class' == o
                ? updateLineClasses(e, t)
                : 'widget' == o && updateLineWidgets(e, t, r);
        }
        t.changes = null;
      }
      function ensureLineWrapped(e) {
        return (
          e.node == e.text &&
            ((e.node = elt('div', null, null, 'position: relative')),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            s && a < 8 && (e.node.style.zIndex = 2)),
          e.node
        );
      }
      function getLineContent(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = n.measure),
            n.built)
          : buildLineContent(e, t);
      }
      function updateLineText(e, t) {
        var n = t.text.className,
          r = getLineContent(e, t);
        t.text == t.node && (t.node = r.pre),
          t.text.parentNode.replaceChild(r.pre, t.text),
          (t.text = r.pre),
          r.bgClass != t.bgClass || r.textClass != t.textClass
            ? ((t.bgClass = r.bgClass),
              (t.textClass = r.textClass),
              updateLineClasses(e, t))
            : n && (t.text.className = n);
      }
      function updateLineClasses(e, t) {
        !(function updateLineBackground(e, t) {
          var n = t.bgClass
            ? t.bgClass + ' ' + (t.line.bgClass || '')
            : t.line.bgClass;
          if ((n && (n += ' CodeMirror-linebackground'), t.background))
            n
              ? (t.background.className = n)
              : (t.background.parentNode.removeChild(t.background),
                (t.background = null));
          else if (n) {
            var r = ensureLineWrapped(t);
            (t.background = r.insertBefore(elt('div', null, n), r.firstChild)),
              e.display.input.setUneditable(t.background);
          }
        })(e, t),
          t.line.wrapClass
            ? (ensureLineWrapped(t).className = t.line.wrapClass)
            : t.node != t.text && (t.node.className = '');
        var n = t.textClass
          ? t.textClass + ' ' + (t.line.textClass || '')
          : t.line.textClass;
        t.text.className = n || '';
      }
      function updateLineGutter(e, t, n, r) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var i = ensureLineWrapped(t);
          (t.gutterBackground = elt(
            'div',
            null,
            'CodeMirror-gutter-background ' + t.line.gutterClass,
            'left: ' +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              'px; width: ' +
              r.gutterTotalWidth +
              'px',
          )),
            e.display.input.setUneditable(t.gutterBackground),
            i.insertBefore(t.gutterBackground, t.text);
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
          var s = ensureLineWrapped(t),
            a = (t.gutter = elt(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                'px',
            ));
          if (
            (e.display.input.setUneditable(a),
            s.insertBefore(a, t.text),
            t.line.gutterClass && (a.className += ' ' + t.line.gutterClass),
            !e.options.lineNumbers ||
              (o && o['CodeMirror-linenumbers']) ||
              (t.lineNumber = a.appendChild(
                elt(
                  'div',
                  lineNumberFor(e.options, n),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    r.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    e.display.lineNumInnerWidth +
                    'px',
                ),
              )),
            o)
          )
            for (var l = 0; l < e.options.gutters.length; ++l) {
              var c = e.options.gutters[l],
                u = o.hasOwnProperty(c) && o[c];
              u &&
                a.appendChild(
                  elt(
                    'div',
                    [u],
                    'CodeMirror-gutter-elt',
                    'left: ' +
                      r.gutterLeft[c] +
                      'px; width: ' +
                      r.gutterWidth[c] +
                      'px',
                  ),
                );
            }
        }
      }
      function updateLineWidgets(e, t, n) {
        t.alignable && (t.alignable = null);
        for (var r = t.node.firstChild, i = void 0; r; r = i)
          (i = r.nextSibling),
            'CodeMirror-linewidget' == r.className && t.node.removeChild(r);
        insertLineWidgets(e, t, n);
      }
      function buildLineElement(e, t, n, r) {
        var i = getLineContent(e, t);
        return (
          (t.text = t.node = i.pre),
          i.bgClass && (t.bgClass = i.bgClass),
          i.textClass && (t.textClass = i.textClass),
          updateLineClasses(e, t),
          updateLineGutter(e, t, n, r),
          insertLineWidgets(e, t, r),
          t.node
        );
      }
      function insertLineWidgets(e, t, n) {
        if ((insertLineWidgetsFor(e, t.line, t, n, !0), t.rest))
          for (var r = 0; r < t.rest.length; r++)
            insertLineWidgetsFor(e, t.rest[r], t, n, !1);
      }
      function insertLineWidgetsFor(e, t, n, r, i) {
        if (t.widgets)
          for (
            var o = ensureLineWrapped(n), s = 0, a = t.widgets;
            s < a.length;
            ++s
          ) {
            var l = a[s],
              c = elt('div', [l.node], 'CodeMirror-linewidget');
            l.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
              positionLineWidget(l, c, n, r),
              e.display.input.setUneditable(c),
              i && l.above
                ? o.insertBefore(c, n.gutter || n.text)
                : o.appendChild(c),
              signalLater(l, 'redraw');
          }
      }
      function positionLineWidget(e, t, n, r) {
        if (e.noHScroll) {
          (n.alignable || (n.alignable = [])).push(t);
          var i = r.wrapperWidth;
          (t.style.left = r.fixedPos + 'px'),
            e.coverGutter ||
              ((i -= r.gutterTotalWidth),
              (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
            (t.style.width = i + 'px');
        }
        e.coverGutter &&
          ((t.style.zIndex = 5),
          (t.style.position = 'relative'),
          e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
      }
      function widgetHeight(e) {
        if (null != e.height) return e.height;
        var t = e.doc.cm;
        if (!t) return 0;
        if (!contains(document.body, e.node)) {
          var n = 'position: relative;';
          e.coverGutter &&
            (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
            e.noHScroll &&
              (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
            removeChildrenAndAdd(
              t.display.measure,
              elt('div', [e.node], null, n),
            );
        }
        return (e.height = e.node.parentNode.offsetHeight);
      }
      function eventInWidget(e, t) {
        for (var n = e_target(t); n != e.wrapper; n = n.parentNode)
          if (
            !n ||
            (1 == n.nodeType && 'true' == n.getAttribute('cm-ignore-events')) ||
            (n.parentNode == e.sizer && n != e.mover)
          )
            return !0;
      }
      function paddingTop(e) {
        return e.lineSpace.offsetTop;
      }
      function paddingVert(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function paddingH(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = removeChildrenAndAdd(e.measure, elt('pre', 'x')),
          n = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          r = {
            left: parseInt(n.paddingLeft),
            right: parseInt(n.paddingRight),
          };
        return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
      }
      function scrollGap(e) {
        return O - e.display.nativeBarWidth;
      }
      function displayWidth(e) {
        return (
          e.display.scroller.clientWidth - scrollGap(e) - e.display.barWidth
        );
      }
      function displayHeight(e) {
        return (
          e.display.scroller.clientHeight - scrollGap(e) - e.display.barHeight
        );
      }
      function mapFromLineView(e, t, n) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var i = 0; i < e.rest.length; i++)
          if (lineNo(e.rest[i]) > n)
            return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0,
            };
      }
      function measureChar(e, t, n, r) {
        return measureCharPrepared(e, prepareMeasureForLine(e, t), n, r);
      }
      function findViewForLine(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[findViewIndex(e, t)];
        var n = e.display.externalMeasured;
        return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
      }
      function prepareMeasureForLine(e, t) {
        var n = lineNo(t),
          r = findViewForLine(e, n);
        r && !r.text
          ? (r = null)
          : r &&
            r.changes &&
            (updateLineForChanges(e, r, n, getDimensions(e)),
            (e.curOp.forceUpdate = !0)),
          r ||
            (r = (function updateExternalMeasurement(e, t) {
              var n = lineNo((t = visualLine(t))),
                r = (e.display.externalMeasured = new LineView(e.doc, t, n));
              r.lineN = n;
              var i = (r.built = buildLineContent(e, r));
              return (
                (r.text = i.pre),
                removeChildrenAndAdd(e.display.lineMeasure, i.pre),
                r
              );
            })(e, t));
        var i = mapFromLineView(r, t, n);
        return {
          line: t,
          view: r,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1,
        };
      }
      function measureCharPrepared(e, t, n, r, i) {
        t.before && (n = -1);
        var o,
          l = n + (r || '');
        return (
          t.cache.hasOwnProperty(l)
            ? (o = t.cache[l])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights ||
                (!(function ensureLineHeights(e, t, n) {
                  var r = e.options.lineWrapping,
                    i = r && displayWidth(e);
                  if (!t.measure.heights || (r && t.measure.width != i)) {
                    var o = (t.measure.heights = []);
                    if (r) {
                      t.measure.width = i;
                      for (
                        var s = t.text.firstChild.getClientRects(), a = 0;
                        a < s.length - 1;
                        a++
                      ) {
                        var l = s[a],
                          c = s[a + 1];
                        Math.abs(l.bottom - c.bottom) > 2 &&
                          o.push((l.bottom + c.top) / 2 - n.top);
                      }
                    }
                    o.push(n.bottom - n.top);
                  }
                })(e, t.view, t.rect),
                (t.hasHeights = !0)),
              (o = (function measureCharInner(e, t, n, r) {
                var i,
                  o = nodeAndOffsetInLineMap(t.map, n, r),
                  l = o.node,
                  c = o.start,
                  u = o.end,
                  d = o.collapse;
                if (3 == l.nodeType) {
                  for (var p = 0; p < 4; p++) {
                    for (
                      ;
                      c &&
                      isExtendingChar(t.line.text.charAt(o.coverStart + c));

                    )
                      --c;
                    for (
                      ;
                      o.coverStart + u < o.coverEnd &&
                      isExtendingChar(t.line.text.charAt(o.coverStart + u));

                    )
                      ++u;
                    if (
                      (i =
                        s && a < 9 && 0 == c && u == o.coverEnd - o.coverStart
                          ? l.parentNode.getBoundingClientRect()
                          : getUsefulRect(L(l, c, u).getClientRects(), r))
                        .left ||
                      i.right ||
                      0 == c
                    )
                      break;
                    (u = c), (c -= 1), (d = 'right');
                  }
                  s &&
                    a < 11 &&
                    (i = (function maybeUpdateRectForZooming(e, t) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function hasBadZoomedRects(e) {
                          if (null != q) return q;
                          var t = removeChildrenAndAdd(e, elt('span', 'x')),
                            n = t.getBoundingClientRect(),
                            r = L(t, 0, 1).getBoundingClientRect();
                          return (q = Math.abs(n.left - r.left) > 1);
                        })(e)
                      )
                        return t;
                      var n = screen.logicalXDPI / screen.deviceXDPI,
                        r = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: t.left * n,
                        right: t.right * n,
                        top: t.top * r,
                        bottom: t.bottom * r,
                      };
                    })(e.display.measure, i));
                } else {
                  c > 0 && (d = r = 'right');
                  var h;
                  i =
                    e.options.lineWrapping &&
                    (h = l.getClientRects()).length > 1
                      ? h['right' == r ? h.length - 1 : 0]
                      : l.getBoundingClientRect();
                }
                if (s && a < 9 && !c && (!i || (!i.left && !i.right))) {
                  var f = l.parentNode.getClientRects()[0];
                  i = f
                    ? {
                        left: f.left,
                        right: f.left + charWidth(e.display),
                        top: f.top,
                        bottom: f.bottom,
                      }
                    : ae;
                }
                for (
                  var g = i.top - t.rect.top,
                    m = i.bottom - t.rect.top,
                    v = (g + m) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(v < y[b]);
                  b++
                );
                var C = b ? y[b - 1] : 0,
                  x = y[b],
                  w = {
                    left: ('right' == d ? i.right : i.left) - t.rect.left,
                    right: ('left' == d ? i.left : i.right) - t.rect.left,
                    top: C,
                    bottom: x,
                  };
                i.left || i.right || (w.bogus = !0);
                e.options.singleCursorHeightPerLine ||
                  ((w.rtop = g), (w.rbottom = m));
                return w;
              })(e, t, n, r)).bogus || (t.cache[l] = o)),
          {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom,
          }
        );
      }
      var ae = { left: 0, right: 0, top: 0, bottom: 0 };
      function nodeAndOffsetInLineMap(e, t, n) {
        for (var r, i, o, s, a, l, c = 0; c < e.length; c += 3)
          if (
            ((a = e[c]),
            (l = e[c + 1]),
            t < a
              ? ((i = 0), (o = 1), (s = 'left'))
              : t < l
                ? (o = (i = t - a) + 1)
                : (c == e.length - 3 || (t == l && e[c + 3] > t)) &&
                  ((i = (o = l - a) - 1), t >= l && (s = 'right')),
            null != i)
          ) {
            if (
              ((r = e[c + 2]),
              a == l && n == (r.insertLeft ? 'left' : 'right') && (s = n),
              'left' == n && 0 == i)
            )
              for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                (r = e[2 + (c -= 3)]), (s = 'left');
            if ('right' == n && i == l - a)
              for (
                ;
                c < e.length - 3 &&
                e[c + 3] == e[c + 4] &&
                !e[c + 5].insertLeft;

              )
                (r = e[(c += 3) + 2]), (s = 'right');
            break;
          }
        return {
          node: r,
          start: i,
          end: o,
          collapse: s,
          coverStart: a,
          coverEnd: l,
        };
      }
      function getUsefulRect(e, t) {
        var n = ae;
        if ('left' == t)
          for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
        else
          for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
        return n;
      }
      function clearLineMeasurementCacheFor(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
      }
      function clearLineMeasurementCache(e) {
        (e.display.externalMeasure = null),
          removeChildren(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
          clearLineMeasurementCacheFor(e.display.view[t]);
      }
      function clearCaches(e) {
        clearLineMeasurementCache(e),
          (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null);
      }
      function pageScrollX() {
        return u && m
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft;
      }
      function pageScrollY() {
        return u && m
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop;
      }
      function widgetTopHeight(e) {
        var t = 0;
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n)
            e.widgets[n].above && (t += widgetHeight(e.widgets[n]));
        return t;
      }
      function intoCoordSystem(e, t, n, r, i) {
        if (!i) {
          var o = widgetTopHeight(t);
          (n.top += o), (n.bottom += o);
        }
        if ('line' == r) return n;
        r || (r = 'local');
        var s = heightAtLine(t);
        if (
          ('local' == r
            ? (s += paddingTop(e.display))
            : (s -= e.display.viewOffset),
          'page' == r || 'window' == r)
        ) {
          var a = e.display.lineSpace.getBoundingClientRect();
          s += a.top + ('window' == r ? 0 : pageScrollY());
          var l = a.left + ('window' == r ? 0 : pageScrollX());
          (n.left += l), (n.right += l);
        }
        return (n.top += s), (n.bottom += s), n;
      }
      function fromCoordSystem(e, t, n) {
        if ('div' == n) return t;
        var r = t.left,
          i = t.top;
        if ('page' == n) (r -= pageScrollX()), (i -= pageScrollY());
        else if ('local' == n || !n) {
          var o = e.display.sizer.getBoundingClientRect();
          (r += o.left), (i += o.top);
        }
        var s = e.display.lineSpace.getBoundingClientRect();
        return { left: r - s.left, top: i - s.top };
      }
      function charCoords(e, t, n, r, i) {
        return (
          r || (r = getLine(e.doc, t.line)),
          intoCoordSystem(e, r, measureChar(e, r, t.ch, i), n)
        );
      }
      function cursorCoords(e, t, n, r, i, o) {
        (r = r || getLine(e.doc, t.line)),
          i || (i = prepareMeasureForLine(e, r));
        function get(t, s) {
          var a = measureCharPrepared(e, i, t, s ? 'right' : 'left', o);
          return (
            s ? (a.left = a.right) : (a.right = a.left),
            intoCoordSystem(e, r, a, n)
          );
        }
        var s = getOrder(r, e.doc.direction),
          a = t.ch,
          l = t.sticky;
        if (
          (a >= r.text.length
            ? ((a = r.text.length), (l = 'before'))
            : a <= 0 && ((a = 0), (l = 'after')),
          !s)
        )
          return get('before' == l ? a - 1 : a, 'before' == l);
        function getBidi(e, t, n) {
          var r = 1 == s[t].level;
          return get(n ? e - 1 : e, r != n);
        }
        var c = getBidiPartAt(s, a, l),
          u = B,
          d = getBidi(a, c, 'before' == l);
        return null != u && (d.other = getBidi(a, u, 'before' != l)), d;
      }
      function estimateCoords(e, t) {
        var n = 0;
        (t = clipPos(e.doc, t)),
          e.options.lineWrapping || (n = charWidth(e.display) * t.ch);
        var r = getLine(e.doc, t.line),
          i = heightAtLine(r) + paddingTop(e.display);
        return { left: n, right: n, top: i, bottom: i + r.height };
      }
      function PosWithInfo(e, t, n, r, i) {
        var o = Pos(e, t, n);
        return (o.xRel = i), r && (o.outside = !0), o;
      }
      function coordsChar(e, t, n) {
        var r = e.doc;
        if ((n += e.display.viewOffset) < 0)
          return PosWithInfo(r.first, 0, null, !0, -1);
        var i = lineAtHeight(r, n),
          o = r.first + r.size - 1;
        if (i > o)
          return PosWithInfo(
            r.first + r.size - 1,
            getLine(r, o).text.length,
            null,
            !0,
            1,
          );
        t < 0 && (t = 0);
        for (var s = getLine(r, i); ; ) {
          var a = coordsCharInner(e, s, i, t, n),
            l = collapsedSpanAtEnd(s),
            c = l && l.find(0, !0);
          if (!l || !(a.ch > c.from.ch || (a.ch == c.from.ch && a.xRel > 0)))
            return a;
          i = lineNo((s = c.to.line));
        }
      }
      function wrappedLineExtent(e, t, n, r) {
        r -= widgetTopHeight(t);
        var i = t.text.length,
          o = findFirst(
            function(t) {
              return measureCharPrepared(e, n, t - 1).bottom <= r;
            },
            i,
            0,
          );
        return {
          begin: o,
          end: (i = findFirst(
            function(t) {
              return measureCharPrepared(e, n, t).top > r;
            },
            o,
            i,
          )),
        };
      }
      function wrappedLineExtentChar(e, t, n, r) {
        n || (n = prepareMeasureForLine(e, t));
        return wrappedLineExtent(
          e,
          t,
          n,
          intoCoordSystem(e, t, measureCharPrepared(e, n, r), 'line').top,
        );
      }
      function boxIsAfter(e, t, n, r) {
        return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
      }
      function coordsCharInner(e, t, n, r, i) {
        i -= heightAtLine(t);
        var o = prepareMeasureForLine(e, t),
          s = widgetTopHeight(t),
          a = 0,
          l = t.text.length,
          c = !0,
          u = getOrder(t, e.doc.direction);
        if (u) {
          var d = (e.options.lineWrapping
            ? function coordsBidiPartWrapped(e, t, n, r, i, o, s) {
                var a = wrappedLineExtent(e, t, r, s),
                  l = a.begin,
                  c = a.end;
                /\s/.test(t.text.charAt(c - 1)) && c--;
                for (var u = null, d = null, p = 0; p < i.length; p++) {
                  var h = i[p];
                  if (!(h.from >= c || h.to <= l)) {
                    var f = 1 != h.level,
                      g = measureCharPrepared(
                        e,
                        r,
                        f ? Math.min(c, h.to) - 1 : Math.max(l, h.from),
                      ).right,
                      m = g < o ? o - g + 1e9 : g - o;
                    (!u || d > m) && ((u = h), (d = m));
                  }
                }
                u || (u = i[i.length - 1]);
                u.from < l && (u = { from: l, to: u.to, level: u.level });
                u.to > c && (u = { from: u.from, to: c, level: u.level });
                return u;
              }
            : function coordsBidiPart(e, t, n, r, i, o, s) {
                var a = findFirst(
                    function(a) {
                      var l = i[a],
                        c = 1 != l.level;
                      return boxIsAfter(
                        cursorCoords(
                          e,
                          Pos(n, c ? l.to : l.from, c ? 'before' : 'after'),
                          'line',
                          t,
                          r,
                        ),
                        o,
                        s,
                        !0,
                      );
                    },
                    0,
                    i.length - 1,
                  ),
                  l = i[a];
                if (a > 0) {
                  var c = 1 != l.level,
                    u = cursorCoords(
                      e,
                      Pos(n, c ? l.from : l.to, c ? 'after' : 'before'),
                      'line',
                      t,
                      r,
                    );
                  boxIsAfter(u, o, s, !0) && u.top > s && (l = i[a - 1]);
                }
                return l;
              })(e, t, n, o, u, r, i);
          (a = (c = 1 != d.level) ? d.from : d.to - 1),
            (l = c ? d.to : d.from - 1);
        }
        var p,
          h,
          f = null,
          g = null,
          m = findFirst(
            function(t) {
              var n = measureCharPrepared(e, o, t);
              return (
                (n.top += s),
                (n.bottom += s),
                !!boxIsAfter(n, r, i, !1) &&
                  (n.top <= i && n.left <= r && ((f = t), (g = n)), !0)
              );
            },
            a,
            l,
          ),
          v = !1;
        if (g) {
          var y = r - g.left < g.right - r,
            b = y == c;
          (m = f + (b ? 0 : 1)),
            (h = b ? 'after' : 'before'),
            (p = y ? g.left : g.right);
        } else {
          c || (m != l && m != a) || m++,
            (h =
              0 == m
                ? 'after'
                : m == t.text.length
                  ? 'before'
                  : measureCharPrepared(e, o, m - (c ? 1 : 0)).bottom + s <=
                      i ==
                    c
                    ? 'after'
                    : 'before');
          var C = cursorCoords(e, Pos(n, m, h), 'line', t, o);
          (p = C.left), (v = i < C.top || i >= C.bottom);
        }
        return PosWithInfo(
          n,
          (m = skipExtendingChars(t.text, m, 1)),
          h,
          v,
          r - p,
        );
      }
      var le;
      function textHeight(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == le) {
          le = elt('pre');
          for (var t = 0; t < 49; ++t)
            le.appendChild(document.createTextNode('x')),
              le.appendChild(elt('br'));
          le.appendChild(document.createTextNode('x'));
        }
        removeChildrenAndAdd(e.measure, le);
        var n = le.offsetHeight / 50;
        return (
          n > 3 && (e.cachedTextHeight = n), removeChildren(e.measure), n || 1
        );
      }
      function charWidth(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = elt('span', 'xxxxxxxxxx'),
          n = elt('pre', [t]);
        removeChildrenAndAdd(e.measure, n);
        var r = t.getBoundingClientRect(),
          i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
      }
      function getDimensions(e) {
        for (
          var t = e.display,
            n = {},
            r = {},
            i = t.gutters.clientLeft,
            o = t.gutters.firstChild,
            s = 0;
          o;
          o = o.nextSibling, ++s
        )
          (n[e.options.gutters[s]] = o.offsetLeft + o.clientLeft + i),
            (r[e.options.gutters[s]] = o.clientWidth);
        return {
          fixedPos: compensateForHScroll(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth,
        };
      }
      function compensateForHScroll(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        );
      }
      function estimateHeight(e) {
        var t = textHeight(e.display),
          n = e.options.lineWrapping,
          r =
            n &&
            Math.max(
              5,
              e.display.scroller.clientWidth / charWidth(e.display) - 3,
            );
        return function(i) {
          if (lineIsHidden(e.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var s = 0; s < i.widgets.length; s++)
              i.widgets[s].height && (o += i.widgets[s].height);
          return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
        };
      }
      function estimateLineHeights(e) {
        var t = e.doc,
          n = estimateHeight(e);
        t.iter(function(e) {
          var t = n(e);
          t != e.height && updateLineHeight(e, t);
        });
      }
      function posFromMouse(e, t, n, r) {
        var i = e.display;
        if (!n && 'true' == e_target(t).getAttribute('cm-not-content'))
          return null;
        var o,
          s,
          a = i.lineSpace.getBoundingClientRect();
        try {
          (o = t.clientX - a.left), (s = t.clientY - a.top);
        } catch (t) {
          return null;
        }
        var l,
          c = coordsChar(e, o, s);
        if (
          r &&
          1 == c.xRel &&
          (l = getLine(e.doc, c.line).text).length == c.ch
        ) {
          var u = countColumn(l, l.length, e.options.tabSize) - l.length;
          c = Pos(
            c.line,
            Math.max(
              0,
              Math.round(
                (o - paddingH(e.display).left) / charWidth(e.display),
              ) - u,
            ),
          );
        }
        return c;
      }
      function findViewIndex(e, t) {
        if (t >= e.display.viewTo) return null;
        if ((t -= e.display.viewFrom) < 0) return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if ((t -= n[r].size) < 0) return r;
      }
      function updateSelection(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function prepareSelection(e, t) {
        void 0 === t && (t = !0);
        for (
          var n = e.doc,
            r = {},
            i = (r.cursors = document.createDocumentFragment()),
            o = (r.selection = document.createDocumentFragment()),
            s = 0;
          s < n.sel.ranges.length;
          s++
        )
          if (t || s != n.sel.primIndex) {
            var a = n.sel.ranges[s];
            if (
              !(
                a.from().line >= e.display.viewTo ||
                a.to().line < e.display.viewFrom
              )
            ) {
              var l = a.empty();
              (l || e.options.showCursorWhenSelecting) &&
                drawSelectionCursor(e, a.head, i),
                l || drawSelectionRange(e, a, o);
            }
          }
        return r;
      }
      function drawSelectionCursor(e, t, n) {
        var r = cursorCoords(
            e,
            t,
            'div',
            null,
            null,
            !e.options.singleCursorHeightPerLine,
          ),
          i = n.appendChild(elt('div', ' ', 'CodeMirror-cursor'));
        if (
          ((i.style.left = r.left + 'px'),
          (i.style.top = r.top + 'px'),
          (i.style.height =
            Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
          r.other)
        ) {
          var o = n.appendChild(
            elt('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'),
          );
          (o.style.display = ''),
            (o.style.left = r.other.left + 'px'),
            (o.style.top = r.other.top + 'px'),
            (o.style.height = 0.85 * (r.other.bottom - r.other.top) + 'px');
        }
      }
      function cmpCoords(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function drawSelectionRange(e, t, n) {
        var r = e.display,
          i = e.doc,
          o = document.createDocumentFragment(),
          s = paddingH(e.display),
          a = s.left,
          l =
            Math.max(r.sizerWidth, displayWidth(e) - r.sizer.offsetLeft) -
            s.right,
          c = 'ltr' == i.direction;
        function add(e, t, n, r) {
          t < 0 && (t = 0),
            (t = Math.round(t)),
            (r = Math.round(r)),
            o.appendChild(
              elt(
                'div',
                null,
                'CodeMirror-selected',
                'position: absolute; left: ' +
                  e +
                  'px;\n                             top: ' +
                  t +
                  'px; width: ' +
                  (null == n ? l - e : n) +
                  'px;\n                             height: ' +
                  (r - t) +
                  'px',
              ),
            );
        }
        function drawForLine(t, n, r) {
          var o,
            s,
            u = getLine(i, t),
            d = u.text.length;
          function coords(n, r) {
            return charCoords(e, Pos(t, n), 'div', u, r);
          }
          function wrapX(t, n, r) {
            var i = wrappedLineExtentChar(e, u, null, t),
              o = ('ltr' == n) == ('after' == r) ? 'left' : 'right';
            return coords(
              'after' == r
                ? i.begin
                : i.end - (/\s/.test(u.text.charAt(i.end - 1)) ? 2 : 1),
              o,
            )[o];
          }
          var p = getOrder(u, i.direction);
          return (
            (function iterateBidiSections(e, t, n, r) {
              if (!e) return r(t, n, 'ltr', 0);
              for (var i = !1, o = 0; o < e.length; ++o) {
                var s = e[o];
                ((s.from < n && s.to > t) || (t == n && s.to == t)) &&
                  (r(
                    Math.max(s.from, t),
                    Math.min(s.to, n),
                    1 == s.level ? 'rtl' : 'ltr',
                    o,
                  ),
                  (i = !0));
              }
              i || r(t, n, 'ltr');
            })(p, n || 0, null == r ? d : r, function(e, t, i, u) {
              var h = 'ltr' == i,
                f = coords(e, h ? 'left' : 'right'),
                g = coords(t - 1, h ? 'right' : 'left'),
                m = null == n && 0 == e,
                v = null == r && t == d,
                y = 0 == u,
                b = !p || u == p.length - 1;
              if (g.top - f.top <= 3) {
                var C = (c ? v : m) && b,
                  x = (c ? m : v) && y ? a : (h ? f : g).left,
                  w = C ? l : (h ? g : f).right;
                add(x, f.top, w - x, f.bottom);
              } else {
                var S, k, L, M;
                h
                  ? ((S = c && m && y ? a : f.left),
                    (k = c ? l : wrapX(e, i, 'before')),
                    (L = c ? a : wrapX(t, i, 'after')),
                    (M = c && v && b ? l : g.right))
                  : ((S = c ? wrapX(e, i, 'before') : a),
                    (k = !c && m && y ? l : f.right),
                    (L = !c && v && b ? a : g.left),
                    (M = c ? wrapX(t, i, 'after') : l)),
                  add(S, f.top, k - S, f.bottom),
                  f.bottom < g.top && add(a, f.bottom, null, g.top),
                  add(L, g.top, M - L, g.bottom);
              }
              (!o || cmpCoords(f, o) < 0) && (o = f),
                cmpCoords(g, o) < 0 && (o = g),
                (!s || cmpCoords(f, s) < 0) && (s = f),
                cmpCoords(g, s) < 0 && (s = g);
            }),
            { start: o, end: s }
          );
        }
        var u = t.from(),
          d = t.to();
        if (u.line == d.line) drawForLine(u.line, u.ch, d.ch);
        else {
          var p = getLine(i, u.line),
            h = getLine(i, d.line),
            f = visualLine(p) == visualLine(h),
            g = drawForLine(u.line, u.ch, f ? p.text.length + 1 : null).end,
            m = drawForLine(d.line, f ? 0 : null, d.ch).start;
          f &&
            (g.top < m.top - 2
              ? (add(g.right, g.top, null, g.bottom),
                add(a, m.top, m.left, m.bottom))
              : add(g.right, g.top, m.left - g.right, g.bottom)),
            g.bottom < m.top && add(a, g.bottom, null, m.top);
        }
        n.appendChild(o);
      }
      function restartBlink(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var n = !0;
          (t.cursorDiv.style.visibility = ''),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function() {
                  return (t.cursorDiv.style.visibility = (n = !n)
                    ? ''
                    : 'hidden');
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = 'hidden');
        }
      }
      function ensureFocus(e) {
        e.state.focused || (e.display.input.focus(), onFocus(e));
      }
      function delayBlurEvent(e) {
        (e.state.delayingBlurEvent = !0),
          setTimeout(function() {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), onBlur(e));
          }, 100);
      }
      function onFocus(e, t) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
          'nocursor' != e.options.readOnly &&
            (e.state.focused ||
              (signal(e, 'focus', e, t),
              (e.state.focused = !0),
              addClass(e.display.wrapper, 'CodeMirror-focused'),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                l &&
                  setTimeout(function() {
                    return e.display.input.reset(!0);
                  }, 20)),
              e.display.input.receivedFocus()),
            restartBlink(e));
      }
      function onBlur(e, t) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (signal(e, 'blur', e, t),
            (e.state.focused = !1),
            k(e.display.wrapper, 'CodeMirror-focused')),
          clearInterval(e.display.blinker),
          setTimeout(function() {
            e.state.focused || (e.display.shift = !1);
          }, 150));
      }
      function updateHeightsInViewport(e) {
        for (
          var t = e.display, n = t.lineDiv.offsetTop, r = 0;
          r < t.view.length;
          r++
        ) {
          var i = t.view[r],
            o = void 0;
          if (!i.hidden) {
            if (s && a < 8) {
              var l = i.node.offsetTop + i.node.offsetHeight;
              (o = l - n), (n = l);
            } else {
              var c = i.node.getBoundingClientRect();
              o = c.bottom - c.top;
            }
            var u = i.line.height - o;
            if (
              (o < 2 && (o = textHeight(t)),
              (u > 0.005 || u < -0.005) &&
                (updateLineHeight(i.line, o),
                updateWidgetHeight(i.line),
                i.rest))
            )
              for (var d = 0; d < i.rest.length; d++)
                updateWidgetHeight(i.rest[d]);
          }
        }
      }
      function updateWidgetHeight(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t],
              r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
      }
      function visibleLines(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - paddingTop(e));
        var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
          o = lineAtHeight(t, r),
          s = lineAtHeight(t, i);
        if (n && n.ensure) {
          var a = n.ensure.from.line,
            l = n.ensure.to.line;
          a < o
            ? ((o = a),
              (s = lineAtHeight(
                t,
                heightAtLine(getLine(t, a)) + e.wrapper.clientHeight,
              )))
            : Math.min(l, t.lastLine()) >= s &&
              ((o = lineAtHeight(
                t,
                heightAtLine(getLine(t, l)) - e.wrapper.clientHeight,
              )),
              (s = l));
        }
        return { from: o, to: Math.max(s, o + 1) };
      }
      function alignHorizontally(e) {
        var t = e.display,
          n = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var r =
                compensateForHScroll(t) -
                t.scroller.scrollLeft +
                e.doc.scrollLeft,
              i = t.gutters.offsetWidth,
              o = r + 'px',
              s = 0;
            s < n.length;
            s++
          )
            if (!n[s].hidden) {
              e.options.fixedGutter &&
                (n[s].gutter && (n[s].gutter.style.left = o),
                n[s].gutterBackground &&
                  (n[s].gutterBackground.style.left = o));
              var a = n[s].alignable;
              if (a) for (var l = 0; l < a.length; l++) a[l].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
        }
      }
      function maybeUpdateLineNumberWidth(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.doc,
          n = lineNumberFor(e.options, t.first + t.size - 1),
          r = e.display;
        if (n.length != r.lineNumChars) {
          var i = r.measure.appendChild(
              elt(
                'div',
                [elt('div', n)],
                'CodeMirror-linenumber CodeMirror-gutter-elt',
              ),
            ),
            o = i.firstChild.offsetWidth,
            s = i.offsetWidth - o;
          return (
            (r.lineGutter.style.width = ''),
            (r.lineNumInnerWidth =
              Math.max(o, r.lineGutter.offsetWidth - s) + 1),
            (r.lineNumWidth = r.lineNumInnerWidth + s),
            (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
            (r.lineGutter.style.width = r.lineNumWidth + 'px'),
            updateGutterSpace(e),
            !0
          );
        }
        return !1;
      }
      function calculateScrollPos(e, t) {
        var n = e.display,
          r = textHeight(e.display);
        t.top < 0 && (t.top = 0);
        var i =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : n.scroller.scrollTop,
          o = displayHeight(e),
          s = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var a = e.doc.height + paddingVert(n),
          l = t.top < r,
          c = t.bottom > a - r;
        if (t.top < i) s.scrollTop = l ? 0 : t.top;
        else if (t.bottom > i + o) {
          var u = Math.min(t.top, (c ? a : t.bottom) - o);
          u != i && (s.scrollTop = u);
        }
        var d =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : n.scroller.scrollLeft,
          p =
            displayWidth(e) -
            (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
          h = t.right - t.left > p;
        return (
          h && (t.right = t.left + p),
          t.left < 10
            ? (s.scrollLeft = 0)
            : t.left < d
              ? (s.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)))
              : t.right > p + d - 3 &&
                (s.scrollLeft = t.right + (h ? 0 : 10) - p),
          s
        );
      }
      function addToScrollTop(e, t) {
        null != t &&
          (resolveScrollToPos(e),
          (e.curOp.scrollTop =
            (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) +
            t));
      }
      function ensureCursorVisible(e) {
        resolveScrollToPos(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin,
        };
      }
      function scrollToCoords(e, t, n) {
        (null == t && null == n) || resolveScrollToPos(e),
          null != t && (e.curOp.scrollLeft = t),
          null != n && (e.curOp.scrollTop = n);
      }
      function resolveScrollToPos(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          scrollToCoordsRange(
            e,
            estimateCoords(e, t.from),
            estimateCoords(e, t.to),
            t.margin,
          );
        }
      }
      function scrollToCoordsRange(e, t, n, r) {
        var i = calculateScrollPos(e, {
          left: Math.min(t.left, n.left),
          top: Math.min(t.top, n.top) - r,
          right: Math.max(t.right, n.right),
          bottom: Math.max(t.bottom, n.bottom) + r,
        });
        scrollToCoords(e, i.scrollLeft, i.scrollTop);
      }
      function updateScrollTop(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          (n || updateDisplaySimple(e, { top: t }),
          setScrollTop(e, t, !0),
          n && updateDisplaySimple(e),
          startWorker(e, 100));
      }
      function setScrollTop(e, t, n) {
        (t = Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t,
        )),
          (e.display.scroller.scrollTop != t || n) &&
            ((e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t &&
              (e.display.scroller.scrollTop = t));
      }
      function setScrollLeft(e, t, n, r) {
        (t = Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth,
        )),
          ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
            !r) ||
            ((e.doc.scrollLeft = t),
            alignHorizontally(e),
            e.display.scroller.scrollLeft != t &&
              (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t));
      }
      function measureForScrollbars(e) {
        var t = e.display,
          n = t.gutters.offsetWidth,
          r = Math.round(e.doc.height + paddingVert(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + scrollGap(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n,
        };
      }
      var ce = function(e, t, n) {
        this.cm = n;
        var r = (this.vert = elt(
            'div',
            [elt('div', null, null, 'min-width: 1px')],
            'CodeMirror-vscrollbar',
          )),
          i = (this.horiz = elt(
            'div',
            [elt('div', null, null, 'height: 100%; min-height: 1px')],
            'CodeMirror-hscrollbar',
          ));
        e(r),
          e(i),
          V(r, 'scroll', function() {
            r.clientHeight && t(r.scrollTop, 'vertical');
          }),
          V(i, 'scroll', function() {
            i.clientWidth && t(i.scrollLeft, 'horizontal');
          }),
          (this.checkedZeroWidth = !1),
          s &&
            a < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
      };
      (ce.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1,
          n = e.scrollHeight > e.clientHeight + 1,
          r = e.nativeBarWidth;
        if (n) {
          (this.vert.style.display = 'block'),
            (this.vert.style.bottom = t ? r + 'px' : '0');
          var i = e.viewHeight - (t ? r : 0);
          this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
        } else
          (this.vert.style.display = ''),
            (this.vert.firstChild.style.height = '0');
        if (t) {
          (this.horiz.style.display = 'block'),
            (this.horiz.style.right = n ? r + 'px' : '0'),
            (this.horiz.style.left = e.barLeft + 'px');
          var o = e.viewWidth - e.barLeft - (n ? r : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
        } else
          (this.horiz.style.display = ''),
            (this.horiz.firstChild.style.width = '0');
        return (
          !this.checkedZeroWidth &&
            e.clientHeight > 0 &&
            (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: n ? r : 0, bottom: t ? r : 0 }
        );
      }),
        (ce.prototype.setScrollLeft = function(e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
        }),
        (ce.prototype.setScrollTop = function(e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
        }),
        (ce.prototype.zeroWidthHack = function() {
          var e = y && !h ? '12px' : '18px';
          (this.horiz.style.height = this.vert.style.width = e),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new T()),
            (this.disableVert = new T());
        }),
        (ce.prototype.enableZeroWidthBar = function(e, t, n) {
          e.style.pointerEvents = 'auto';
          t.set(1e3, function maybeDisable() {
            var r = e.getBoundingClientRect();
            ('vert' == n
              ? document.elementFromPoint(r.right - 1, (r.top + r.bottom) / 2)
              : document.elementFromPoint(
                  (r.right + r.left) / 2,
                  r.bottom - 1,
                )) != e
              ? (e.style.pointerEvents = 'none')
              : t.set(1e3, maybeDisable);
          });
        }),
        (ce.prototype.clear = function() {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        });
      var ue = function() {};
      (ue.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }),
        (ue.prototype.setScrollLeft = function() {}),
        (ue.prototype.setScrollTop = function() {}),
        (ue.prototype.clear = function() {});
      function updateScrollbars(e, t) {
        t || (t = measureForScrollbars(e));
        var n = e.display.barWidth,
          r = e.display.barHeight;
        updateScrollbarsInner(e, t);
        for (
          var i = 0;
          (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
          i++
        )
          n != e.display.barWidth &&
            e.options.lineWrapping &&
            updateHeightsInViewport(e),
            updateScrollbarsInner(e, measureForScrollbars(e)),
            (n = e.display.barWidth),
            (r = e.display.barHeight);
      }
      function updateScrollbarsInner(e, t) {
        var n = e.display,
          r = n.scrollbars.update(t);
        (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
          (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
          (n.heightForcer.style.borderBottom =
            r.bottom + 'px solid transparent'),
          r.right && r.bottom
            ? ((n.scrollbarFiller.style.display = 'block'),
              (n.scrollbarFiller.style.height = r.bottom + 'px'),
              (n.scrollbarFiller.style.width = r.right + 'px'))
            : (n.scrollbarFiller.style.display = ''),
          r.bottom &&
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((n.gutterFiller.style.display = 'block'),
              (n.gutterFiller.style.height = r.bottom + 'px'),
              (n.gutterFiller.style.width = t.gutterWidth + 'px'))
            : (n.gutterFiller.style.display = '');
      }
      var de = { native: ce, null: ue };
      function initScrollbars(e) {
        e.display.scrollbars &&
          (e.display.scrollbars.clear(),
          e.display.scrollbars.addClass &&
            k(e.display.wrapper, e.display.scrollbars.addClass)),
          (e.display.scrollbars = new de[e.options.scrollbarStyle](
            function(t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                V(t, 'mousedown', function() {
                  e.state.focused &&
                    setTimeout(function() {
                      return e.display.input.focus();
                    }, 0);
                }),
                t.setAttribute('cm-not-content', 'true');
            },
            function(t, n) {
              'horizontal' == n ? setScrollLeft(e, t) : updateScrollTop(e, t);
            },
            e,
          )),
          e.display.scrollbars.addClass &&
            addClass(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var pe = 0;
      function startOperation(e) {
        (e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++pe,
        }),
          (function pushOperation(e) {
            oe
              ? oe.ops.push(e)
              : (e.ownsGroup = oe = { ops: [e], delayedCallbacks: [] });
          })(e.curOp);
      }
      function endOperation(e) {
        !(function finishOperation(e, t) {
          var n = e.ownsGroup;
          if (n)
            try {
              !(function fireCallbacksForOps(e) {
                var t = e.delayedCallbacks,
                  n = 0;
                do {
                  for (; n < t.length; n++) t[n].call(null);
                  for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r];
                    if (i.cursorActivityHandlers)
                      for (
                        ;
                        i.cursorActivityCalled <
                        i.cursorActivityHandlers.length;

                      )
                        i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                          null,
                          i.cm,
                        );
                  }
                } while (n < t.length);
              })(n);
            } finally {
              (oe = null), t(n);
            }
        })(e.curOp, function(e) {
          for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
          !(function endOperations(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) endOperation_R1(t[n]);
            for (var r = 0; r < t.length; r++)
              (i = t[r]).updatedDisplay =
                i.mustUpdate && updateDisplayIfNeeded(i.cm, i.update);
            var i;
            for (var o = 0; o < t.length; o++) endOperation_R2(t[o]);
            for (var s = 0; s < t.length; s++) endOperation_W2(t[s]);
            for (var a = 0; a < t.length; a++) endOperation_finish(t[a]);
          })(e);
        });
      }
      function endOperation_R1(e) {
        var t = e.cm,
          n = t.display;
        !(function maybeClipScrollbars(e) {
          var t = e.display;
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth =
              t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = scrollGap(e) + 'px'),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
            (t.sizer.style.borderRightWidth = scrollGap(e) + 'px'),
            (t.scrollbarsClipped = !0));
        })(t),
          e.updateMaxLine && findMaxLine(t),
          (e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            null != e.scrollTop ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < n.viewFrom ||
                e.scrollToPos.to.line >= n.viewTo)) ||
            (n.maxLineChanged && t.options.lineWrapping)),
          (e.update =
            e.mustUpdate &&
            new he(
              t,
              e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
              e.forceUpdate,
            ));
      }
      function endOperation_R2(e) {
        var t = e.cm,
          n = t.display;
        e.updatedDisplay && updateHeightsInViewport(t),
          (e.barMeasure = measureForScrollbars(t)),
          n.maxLineChanged &&
            !t.options.lineWrapping &&
            ((e.adjustWidthTo =
              measureChar(t, n.maxLine, n.maxLine.text.length).left + 3),
            (t.display.sizerWidth = e.adjustWidthTo),
            (e.barMeasure.scrollWidth = Math.max(
              n.scroller.clientWidth,
              n.sizer.offsetLeft +
                e.adjustWidthTo +
                scrollGap(t) +
                t.display.barWidth,
            )),
            (e.maxScrollLeft = Math.max(
              0,
              n.sizer.offsetLeft + e.adjustWidthTo - displayWidth(t),
            ))),
          (e.updatedDisplay || e.selectionChanged) &&
            (e.preparedSelection = n.input.prepareSelection());
      }
      function endOperation_W2(e) {
        var t = e.cm;
        null != e.adjustWidthTo &&
          ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
          e.maxScrollLeft < t.doc.scrollLeft &&
            setScrollLeft(
              t,
              Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
              !0,
            ),
          (t.display.maxLineChanged = !1));
        var n = e.focus && e.focus == activeElt();
        e.preparedSelection &&
          t.display.input.showSelection(e.preparedSelection, n),
          (e.updatedDisplay || e.startHeight != t.doc.height) &&
            updateScrollbars(t, e.barMeasure),
          e.updatedDisplay && setDocumentHeight(t, e.barMeasure),
          e.selectionChanged && restartBlink(t),
          t.state.focused && e.updateInput && t.display.input.reset(e.typing),
          n && ensureFocus(e.cm);
      }
      function endOperation_finish(e) {
        var t = e.cm,
          n = t.display,
          r = t.doc;
        if (
          (e.updatedDisplay && postUpdateDisplay(t, e.update),
          null == n.wheelStartX ||
            (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
            (n.wheelStartX = n.wheelStartY = null),
          null != e.scrollTop && setScrollTop(t, e.scrollTop, e.forceScroll),
          null != e.scrollLeft && setScrollLeft(t, e.scrollLeft, !0, !0),
          e.scrollToPos)
        ) {
          !(function maybeScrollWindow(e, t) {
            if (!signalDOMEvent(e, 'scrollCursorIntoView')) {
              var n = e.display,
                r = n.sizer.getBoundingClientRect(),
                i = null;
              if (
                (t.top + r.top < 0
                  ? (i = !0)
                  : t.bottom + r.top >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) && (i = !1),
                null != i && !f)
              ) {
                var o = elt(
                  'div',
                  '​',
                  null,
                  'position: absolute;\n                         top: ' +
                    (t.top - n.viewOffset - paddingTop(e.display)) +
                    'px;\n                         height: ' +
                    (t.bottom - t.top + scrollGap(e) + n.barHeight) +
                    'px;\n                         left: ' +
                    t.left +
                    'px; width: ' +
                    Math.max(2, t.right - t.left) +
                    'px;',
                );
                e.display.lineSpace.appendChild(o),
                  o.scrollIntoView(i),
                  e.display.lineSpace.removeChild(o);
              }
            }
          })(
            t,
            (function scrollPosIntoView(e, t, n, r) {
              null == r && (r = 0);
              var i;
              e.options.lineWrapping ||
                t != n ||
                (n =
                  'before' ==
                  (t = t.ch
                    ? Pos(
                        t.line,
                        'before' == t.sticky ? t.ch - 1 : t.ch,
                        'after',
                      )
                    : t).sticky
                    ? Pos(t.line, t.ch + 1, 'before')
                    : t);
              for (var o = 0; o < 5; o++) {
                var s = !1,
                  a = cursorCoords(e, t),
                  l = n && n != t ? cursorCoords(e, n) : a,
                  c = calculateScrollPos(
                    e,
                    (i = {
                      left: Math.min(a.left, l.left),
                      top: Math.min(a.top, l.top) - r,
                      right: Math.max(a.left, l.left),
                      bottom: Math.max(a.bottom, l.bottom) + r,
                    }),
                  ),
                  u = e.doc.scrollTop,
                  d = e.doc.scrollLeft;
                if (
                  (null != c.scrollTop &&
                    (updateScrollTop(e, c.scrollTop),
                    Math.abs(e.doc.scrollTop - u) > 1 && (s = !0)),
                  null != c.scrollLeft &&
                    (setScrollLeft(e, c.scrollLeft),
                    Math.abs(e.doc.scrollLeft - d) > 1 && (s = !0)),
                  !s)
                )
                  break;
              }
              return i;
            })(
              t,
              clipPos(r, e.scrollToPos.from),
              clipPos(r, e.scrollToPos.to),
              e.scrollToPos.margin,
            ),
          );
        }
        var i = e.maybeHiddenMarkers,
          o = e.maybeUnhiddenMarkers;
        if (i)
          for (var s = 0; s < i.length; ++s)
            i[s].lines.length || signal(i[s], 'hide');
        if (o)
          for (var a = 0; a < o.length; ++a)
            o[a].lines.length && signal(o[a], 'unhide');
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
          e.changeObjs && signal(t, 'changes', t, e.changeObjs),
          e.update && e.update.finish();
      }
      function runInOp(e, t) {
        if (e.curOp) return t();
        startOperation(e);
        try {
          return t();
        } finally {
          endOperation(e);
        }
      }
      function operation(e, t) {
        return function() {
          if (e.curOp) return t.apply(e, arguments);
          startOperation(e);
          try {
            return t.apply(e, arguments);
          } finally {
            endOperation(e);
          }
        };
      }
      function methodOp(e) {
        return function() {
          if (this.curOp) return e.apply(this, arguments);
          startOperation(this);
          try {
            return e.apply(this, arguments);
          } finally {
            endOperation(this);
          }
        };
      }
      function docMethodOp(e) {
        return function() {
          var t = this.cm;
          if (!t || t.curOp) return e.apply(this, arguments);
          startOperation(t);
          try {
            return e.apply(this, arguments);
          } finally {
            endOperation(t);
          }
        };
      }
      function regChange(e, t, n, r) {
        null == t && (t = e.doc.first),
          null == n && (n = e.doc.first + e.doc.size),
          r || (r = 0);
        var i = e.display;
        if (
          (r &&
            n < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
            (i.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= i.viewTo)
        )
          F && visualLineNo(e.doc, t) < i.viewTo && resetView(e);
        else if (n <= i.viewFrom)
          F && visualLineEndNo(e.doc, n + r) > i.viewFrom
            ? resetView(e)
            : ((i.viewFrom += r), (i.viewTo += r));
        else if (t <= i.viewFrom && n >= i.viewTo) resetView(e);
        else if (t <= i.viewFrom) {
          var o = viewCuttingPoint(e, n, n + r, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += r))
            : resetView(e);
        } else if (n >= i.viewTo) {
          var s = viewCuttingPoint(e, t, t, -1);
          s
            ? ((i.view = i.view.slice(0, s.index)), (i.viewTo = s.lineN))
            : resetView(e);
        } else {
          var a = viewCuttingPoint(e, t, t, -1),
            l = viewCuttingPoint(e, n, n + r, 1);
          a && l
            ? ((i.view = i.view
                .slice(0, a.index)
                .concat(buildViewArray(e, a.lineN, l.lineN))
                .concat(i.view.slice(l.index))),
              (i.viewTo += r))
            : resetView(e);
        }
        var c = i.externalMeasured;
        c &&
          (n < c.lineN
            ? (c.lineN += r)
            : t < c.lineN + c.size && (i.externalMeasured = null));
      }
      function regLineChange(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display,
          i = e.display.externalMeasured;
        if (
          (i &&
            t >= i.lineN &&
            t < i.lineN + i.size &&
            (r.externalMeasured = null),
          !(t < r.viewFrom || t >= r.viewTo))
        ) {
          var o = r.view[findViewIndex(e, t)];
          if (null != o.node) {
            var s = o.changes || (o.changes = []);
            -1 == indexOf(s, n) && s.push(n);
          }
        }
      }
      function resetView(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0);
      }
      function viewCuttingPoint(e, t, n, r) {
        var i,
          o = findViewIndex(e, t),
          s = e.display.view;
        if (!F || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
        for (var a = e.display.viewFrom, l = 0; l < o; l++) a += s[l].size;
        if (a != t) {
          if (r > 0) {
            if (o == s.length - 1) return null;
            (i = a + s[o].size - t), o++;
          } else i = a - t;
          (t += i), (n += i);
        }
        for (; visualLineNo(e.doc, n) != n; ) {
          if (o == (r < 0 ? 0 : s.length - 1)) return null;
          (n += r * s[o - (r < 0 ? 1 : 0)].size), (o += r);
        }
        return { index: o, lineN: n };
      }
      function countDirtyView(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var i = t[r];
          i.hidden || (i.node && !i.changes) || ++n;
        }
        return n;
      }
      function startWorker(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
          e.state.highlight.set(t, bind(highlightWorker, e));
      }
      function highlightWorker(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var n = +new Date() + e.options.workTime,
            r = getContextBefore(e, t.highlightFrontier),
            i = [];
          t.iter(
            r.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function(o) {
              if (r.line >= e.display.viewFrom) {
                var s = o.styles,
                  a =
                    o.text.length > e.options.maxHighlightLength
                      ? copyState(t.mode, r.state)
                      : null,
                  l = highlightLine(e, o, r, !0);
                a && (r.state = a), (o.styles = l.styles);
                var c = o.styleClasses,
                  u = l.classes;
                u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                for (
                  var d =
                      !s ||
                      s.length != o.styles.length ||
                      (c != u &&
                        (!c ||
                          !u ||
                          c.bgClass != u.bgClass ||
                          c.textClass != u.textClass)),
                    p = 0;
                  !d && p < s.length;
                  ++p
                )
                  d = s[p] != o.styles[p];
                d && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
              } else
                o.text.length <= e.options.maxHighlightLength &&
                  processLine(e, o.text, r),
                  (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                  r.nextLine();
              if (+new Date() > n)
                return startWorker(e, e.options.workDelay), !0;
            },
          ),
            (t.highlightFrontier = r.line),
            (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
            i.length &&
              runInOp(e, function() {
                for (var t = 0; t < i.length; t++)
                  regLineChange(e, i[t], 'text');
              });
        }
      }
      var he = function(e, t, n) {
        var r = e.display;
        (this.viewport = t),
          (this.visible = visibleLines(r, e.doc, t)),
          (this.editorIsHidden = !r.wrapper.offsetWidth),
          (this.wrapperHeight = r.wrapper.clientHeight),
          (this.wrapperWidth = r.wrapper.clientWidth),
          (this.oldDisplayWidth = displayWidth(e)),
          (this.force = n),
          (this.dims = getDimensions(e)),
          (this.events = []);
      };
      (he.prototype.signal = function(e, t) {
        hasHandler(e, t) && this.events.push(arguments);
      }),
        (he.prototype.finish = function() {
          for (var e = 0; e < this.events.length; e++)
            signal.apply(null, this.events[e]);
        });
      function updateDisplayIfNeeded(e, t) {
        var n = e.display,
          r = e.doc;
        if (t.editorIsHidden) return resetView(e), !1;
        if (
          !t.force &&
          t.visible.from >= n.viewFrom &&
          t.visible.to <= n.viewTo &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
          n.renderedView == n.view &&
          0 == countDirtyView(e)
        )
          return !1;
        maybeUpdateLineNumberWidth(e) &&
          (resetView(e), (t.dims = getDimensions(e)));
        var i = r.first + r.size,
          o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
          s = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < o &&
          o - n.viewFrom < 20 &&
          (o = Math.max(r.first, n.viewFrom)),
          n.viewTo > s && n.viewTo - s < 20 && (s = Math.min(i, n.viewTo)),
          F && ((o = visualLineNo(e.doc, o)), (s = visualLineEndNo(e.doc, s)));
        var a =
          o != n.viewFrom ||
          s != n.viewTo ||
          n.lastWrapHeight != t.wrapperHeight ||
          n.lastWrapWidth != t.wrapperWidth;
        !(function adjustView(e, t, n) {
          var r = e.display;
          0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
            ? ((r.view = buildViewArray(e, t, n)), (r.viewFrom = t))
            : (r.viewFrom > t
                ? (r.view = buildViewArray(e, t, r.viewFrom).concat(r.view))
                : r.viewFrom < t &&
                  (r.view = r.view.slice(findViewIndex(e, t))),
              (r.viewFrom = t),
              r.viewTo < n
                ? (r.view = r.view.concat(buildViewArray(e, r.viewTo, n)))
                : r.viewTo > n &&
                  (r.view = r.view.slice(0, findViewIndex(e, n)))),
            (r.viewTo = n);
        })(e, o, s),
          (n.viewOffset = heightAtLine(getLine(e.doc, n.viewFrom))),
          (e.display.mover.style.top = n.viewOffset + 'px');
        var c = countDirtyView(e);
        if (
          !a &&
          0 == c &&
          !t.force &&
          n.renderedView == n.view &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
          return !1;
        var u = (function selectionSnapshot(e) {
          if (e.hasFocus()) return null;
          var t = activeElt();
          if (!t || !contains(e.display.lineDiv, t)) return null;
          var n = { activeElt: t };
          if (window.getSelection) {
            var r = window.getSelection();
            r.anchorNode &&
              r.extend &&
              contains(e.display.lineDiv, r.anchorNode) &&
              ((n.anchorNode = r.anchorNode),
              (n.anchorOffset = r.anchorOffset),
              (n.focusNode = r.focusNode),
              (n.focusOffset = r.focusOffset));
          }
          return n;
        })(e);
        return (
          c > 4 && (n.lineDiv.style.display = 'none'),
          (function patchDisplay(e, t, n) {
            var r = e.display,
              i = e.options.lineNumbers,
              o = r.lineDiv,
              s = o.firstChild;
            function rm(t) {
              var n = t.nextSibling;
              return (
                l && y && e.display.currentWheelTarget == t
                  ? (t.style.display = 'none')
                  : t.parentNode.removeChild(t),
                n
              );
            }
            for (var a = r.view, c = r.viewFrom, u = 0; u < a.length; u++) {
              var d = a[u];
              if (d.hidden);
              else if (d.node && d.node.parentNode == o) {
                for (; s != d.node; ) s = rm(s);
                var p = i && null != t && t <= c && d.lineNumber;
                d.changes &&
                  (indexOf(d.changes, 'gutter') > -1 && (p = !1),
                  updateLineForChanges(e, d, c, n)),
                  p &&
                    (removeChildren(d.lineNumber),
                    d.lineNumber.appendChild(
                      document.createTextNode(lineNumberFor(e.options, c)),
                    )),
                  (s = d.node.nextSibling);
              } else {
                var h = buildLineElement(e, d, c, n);
                o.insertBefore(h, s);
              }
              c += d.size;
            }
            for (; s; ) s = rm(s);
          })(e, n.updateLineNumbers, t.dims),
          c > 4 && (n.lineDiv.style.display = ''),
          (n.renderedView = n.view),
          (function restoreSelection(e) {
            if (
              e &&
              e.activeElt &&
              e.activeElt != activeElt() &&
              (e.activeElt.focus(),
              e.anchorNode &&
                contains(document.body, e.anchorNode) &&
                contains(document.body, e.focusNode))
            ) {
              var t = window.getSelection(),
                n = document.createRange();
              n.setEnd(e.anchorNode, e.anchorOffset),
                n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                t.extend(e.focusNode, e.focusOffset);
            }
          })(u),
          removeChildren(n.cursorDiv),
          removeChildren(n.selectionDiv),
          (n.gutters.style.height = n.sizer.style.minHeight = 0),
          a &&
            ((n.lastWrapHeight = t.wrapperHeight),
            (n.lastWrapWidth = t.wrapperWidth),
            startWorker(e, 400)),
          (n.updateLineNumbers = null),
          !0
        );
      }
      function postUpdateDisplay(e, t) {
        for (
          var n = t.viewport, r = !0;
          ((r &&
            e.options.lineWrapping &&
            t.oldDisplayWidth != displayWidth(e)) ||
            (n &&
              null != n.top &&
              (n = {
                top: Math.min(
                  e.doc.height + paddingVert(e.display) - displayHeight(e),
                  n.top,
                ),
              }),
            (t.visible = visibleLines(e.display, e.doc, n)),
            !(
              t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo
            ))) &&
          updateDisplayIfNeeded(e, t);
          r = !1
        ) {
          updateHeightsInViewport(e);
          var i = measureForScrollbars(e);
          updateSelection(e),
            updateScrollbars(e, i),
            setDocumentHeight(e, i),
            (t.force = !1);
        }
        t.signal(e, 'update', e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              'viewportChange',
              e,
              e.display.viewFrom,
              e.display.viewTo,
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo));
      }
      function updateDisplaySimple(e, t) {
        var n = new he(e, t);
        if (updateDisplayIfNeeded(e, n)) {
          updateHeightsInViewport(e), postUpdateDisplay(e, n);
          var r = measureForScrollbars(e);
          updateSelection(e),
            updateScrollbars(e, r),
            setDocumentHeight(e, r),
            n.finish();
        }
      }
      function updateGutterSpace(e) {
        var t = e.display.gutters.offsetWidth;
        e.display.sizer.style.marginLeft = t + 'px';
      }
      function setDocumentHeight(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + 'px'),
          (e.display.heightForcer.style.top = t.docHeight + 'px'),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + scrollGap(e) + 'px');
      }
      function updateGutters(e) {
        var t = e.display.gutters,
          n = e.options.gutters;
        removeChildren(t);
        for (var r = 0; r < n.length; ++r) {
          var i = n[r],
            o = t.appendChild(elt('div', null, 'CodeMirror-gutter ' + i));
          'CodeMirror-linenumbers' == i &&
            ((e.display.lineGutter = o),
            (o.style.width = (e.display.lineNumWidth || 1) + 'px'));
        }
        (t.style.display = r ? '' : 'none'), updateGutterSpace(e);
      }
      function setGuttersForLineNumbers(e) {
        var t = indexOf(e.gutters, 'CodeMirror-linenumbers');
        -1 == t && e.lineNumbers
          ? (e.gutters = e.gutters.concat(['CodeMirror-linenumbers']))
          : t > -1 &&
            !e.lineNumbers &&
            ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1));
      }
      var fe = 0,
        ge = null;
      s ? (ge = -0.53) : n ? (ge = 15) : u ? (ge = -0.7) : p && (ge = -1 / 3);
      function wheelEventDelta(e) {
        var t = e.wheelDeltaX,
          n = e.wheelDeltaY;
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == n && e.detail && e.axis == e.VERTICAL_AXIS
            ? (n = e.detail)
            : null == n && (n = e.wheelDelta),
          { x: t, y: n }
        );
      }
      function wheelEventPixels(e) {
        var t = wheelEventDelta(e);
        return (t.x *= ge), (t.y *= ge), t;
      }
      function onScrollWheel(e, t) {
        var r = wheelEventDelta(t),
          i = r.x,
          o = r.y,
          s = e.display,
          a = s.scroller,
          c = a.scrollWidth > a.clientWidth,
          u = a.scrollHeight > a.clientHeight;
        if ((i && c) || (o && u)) {
          if (o && y && l)
            e: for (var p = t.target, h = s.view; p != a; p = p.parentNode)
              for (var f = 0; f < h.length; f++)
                if (h[f].node == p) {
                  e.display.currentWheelTarget = p;
                  break e;
                }
          if (i && !n && !d && null != ge)
            return (
              o && u && updateScrollTop(e, Math.max(0, a.scrollTop + o * ge)),
              setScrollLeft(e, Math.max(0, a.scrollLeft + i * ge)),
              (!o || (o && u)) && e_preventDefault(t),
              void (s.wheelStartX = null)
            );
          if (o && null != ge) {
            var g = o * ge,
              m = e.doc.scrollTop,
              v = m + s.wrapper.clientHeight;
            g < 0
              ? (m = Math.max(0, m + g - 50))
              : (v = Math.min(e.doc.height, v + g + 50)),
              updateDisplaySimple(e, { top: m, bottom: v });
          }
          fe < 20 &&
            (null == s.wheelStartX
              ? ((s.wheelStartX = a.scrollLeft),
                (s.wheelStartY = a.scrollTop),
                (s.wheelDX = i),
                (s.wheelDY = o),
                setTimeout(function() {
                  if (null != s.wheelStartX) {
                    var e = a.scrollLeft - s.wheelStartX,
                      t = a.scrollTop - s.wheelStartY,
                      n =
                        (t && s.wheelDY && t / s.wheelDY) ||
                        (e && s.wheelDX && e / s.wheelDX);
                    (s.wheelStartX = s.wheelStartY = null),
                      n && ((ge = (ge * fe + n) / (fe + 1)), ++fe);
                  }
                }, 200))
              : ((s.wheelDX += i), (s.wheelDY += o)));
        }
      }
      var me = function(e, t) {
        (this.ranges = e), (this.primIndex = t);
      };
      (me.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }),
        (me.prototype.equals = function(e) {
          if (e == this) return !0;
          if (
            e.primIndex != this.primIndex ||
            e.ranges.length != this.ranges.length
          )
            return !1;
          for (var t = 0; t < this.ranges.length; t++) {
            var n = this.ranges[t],
              r = e.ranges[t];
            if (
              !equalCursorPos(n.anchor, r.anchor) ||
              !equalCursorPos(n.head, r.head)
            )
              return !1;
          }
          return !0;
        }),
        (me.prototype.deepCopy = function() {
          for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new ve(
              copyPos(this.ranges[t].anchor),
              copyPos(this.ranges[t].head),
            );
          return new me(e, this.primIndex);
        }),
        (me.prototype.somethingSelected = function() {
          for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty()) return !0;
          return !1;
        }),
        (me.prototype.contains = function(e, t) {
          t || (t = e);
          for (var n = 0; n < this.ranges.length; n++) {
            var r = this.ranges[n];
            if (cmp(t, r.from()) >= 0 && cmp(e, r.to()) <= 0) return n;
          }
          return -1;
        });
      var ve = function(e, t) {
        (this.anchor = e), (this.head = t);
      };
      (ve.prototype.from = function() {
        return minPos(this.anchor, this.head);
      }),
        (ve.prototype.to = function() {
          return maxPos(this.anchor, this.head);
        }),
        (ve.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        });
      function normalizeSelection(e, t) {
        var n = e[t];
        e.sort(function(e, t) {
          return cmp(e.from(), t.from());
        }),
          (t = indexOf(e, n));
        for (var r = 1; r < e.length; r++) {
          var i = e[r],
            o = e[r - 1];
          if (cmp(o.to(), i.from()) >= 0) {
            var s = minPos(o.from(), i.from()),
              a = maxPos(o.to(), i.to()),
              l = o.empty() ? i.from() == i.head : o.from() == o.head;
            r <= t && --t, e.splice(--r, 2, new ve(l ? a : s, l ? s : a));
          }
        }
        return new me(e, t);
      }
      function simpleSelection(e, t) {
        return new me([new ve(e, t || e)], 0);
      }
      function changeEnd(e) {
        return e.text
          ? Pos(
              e.from.line + e.text.length - 1,
              lst(e.text).length + (1 == e.text.length ? e.from.ch : 0),
            )
          : e.to;
      }
      function adjustForChange(e, t) {
        if (cmp(e, t.from) < 0) return e;
        if (cmp(e, t.to) <= 0) return changeEnd(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          r = e.ch;
        return (
          e.line == t.to.line && (r += changeEnd(t).ch - t.to.ch), Pos(n, r)
        );
      }
      function computeSelAfterChange(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var i = e.sel.ranges[r];
          n.push(
            new ve(adjustForChange(i.anchor, t), adjustForChange(i.head, t)),
          );
        }
        return normalizeSelection(n, e.sel.primIndex);
      }
      function offsetPos(e, t, n) {
        return e.line == t.line
          ? Pos(n.line, e.ch - t.ch + n.ch)
          : Pos(n.line + (e.line - t.line), e.ch);
      }
      function loadMode(e) {
        (e.doc.mode = getMode(e.options, e.doc.modeOption)), resetModeState(e);
      }
      function resetModeState(e) {
        e.doc.iter(function(e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
        }),
          (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
          startWorker(e, 100),
          e.state.modeGen++,
          e.curOp && regChange(e);
      }
      function isWholeLineUpdate(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          '' == lst(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        );
      }
      function updateDoc(e, t, n, r) {
        function spansFor(e) {
          return n ? n[e] : null;
        }
        function update(e, n, i) {
          !(function updateLine(e, t, n, r) {
            (e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              detachMarkedSpans(e),
              attachMarkedSpans(e, n);
            var i = r ? r(e) : 1;
            i != e.height && updateLineHeight(e, i);
          })(e, n, i, r),
            signalLater(e, 'change', e, t);
        }
        function linesFor(e, t) {
          for (var n = [], i = e; i < t; ++i)
            n.push(new ne(s[i], spansFor(i), r));
          return n;
        }
        var i = t.from,
          o = t.to,
          s = t.text,
          a = getLine(e, i.line),
          l = getLine(e, o.line),
          c = lst(s),
          u = spansFor(s.length - 1),
          d = o.line - i.line;
        if (t.full)
          e.insert(0, linesFor(0, s.length)),
            e.remove(s.length, e.size - s.length);
        else if (isWholeLineUpdate(e, t)) {
          var p = linesFor(0, s.length - 1);
          update(l, l.text, u),
            d && e.remove(i.line, d),
            p.length && e.insert(i.line, p);
        } else if (a == l)
          if (1 == s.length)
            update(a, a.text.slice(0, i.ch) + c + a.text.slice(o.ch), u);
          else {
            var h = linesFor(1, s.length - 1);
            h.push(new ne(c + a.text.slice(o.ch), u, r)),
              update(a, a.text.slice(0, i.ch) + s[0], spansFor(0)),
              e.insert(i.line + 1, h);
          }
        else if (1 == s.length)
          update(
            a,
            a.text.slice(0, i.ch) + s[0] + l.text.slice(o.ch),
            spansFor(0),
          ),
            e.remove(i.line + 1, d);
        else {
          update(a, a.text.slice(0, i.ch) + s[0], spansFor(0)),
            update(l, c + l.text.slice(o.ch), u);
          var f = linesFor(1, s.length - 1);
          d > 1 && e.remove(i.line + 1, d - 1), e.insert(i.line + 1, f);
        }
        signalLater(e, 'change', e, t);
      }
      function linkedDocs(e, t, n) {
        !(function propagate(e, r, i) {
          if (e.linked)
            for (var o = 0; o < e.linked.length; ++o) {
              var s = e.linked[o];
              if (s.doc != r) {
                var a = i && s.sharedHist;
                (n && !a) || (t(s.doc, a), propagate(s.doc, e, a));
              }
            }
        })(e, null, !0);
      }
      function attachDoc(e, t) {
        if (t.cm) throw new Error('This document is already in use.');
        (e.doc = t),
          (t.cm = e),
          estimateLineHeights(e),
          loadMode(e),
          setDirectionClass(e),
          e.options.lineWrapping || findMaxLine(e),
          (e.options.mode = t.modeOption),
          regChange(e);
      }
      function setDirectionClass(e) {
        ('rtl' == e.doc.direction ? addClass : k)(
          e.display.lineDiv,
          'CodeMirror-rtl',
        );
      }
      function History(e) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e || 1);
      }
      function historyChangeFromChange(e, t) {
        var n = {
          from: copyPos(t.from),
          to: changeEnd(t),
          text: getBetween(e, t.from, t.to),
        };
        return (
          attachLocalSpans(e, n, t.from.line, t.to.line + 1),
          linkedDocs(
            e,
            function(e) {
              return attachLocalSpans(e, n, t.from.line, t.to.line + 1);
            },
            !0,
          ),
          n
        );
      }
      function clearSelectionEvents(e) {
        for (; e.length; ) {
          if (!lst(e).ranges) break;
          e.pop();
        }
      }
      function addChangeToHistory(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var o,
          s,
          a = +new Date();
        if (
          (i.lastOp == r ||
            (i.lastOrigin == t.origin &&
              t.origin &&
              (('+' == t.origin.charAt(0) &&
                e.cm &&
                i.lastModTime > a - e.cm.options.historyEventDelay) ||
                '*' == t.origin.charAt(0)))) &&
          (o = (function lastChangeEvent(e, t) {
            return t
              ? (clearSelectionEvents(e.done), lst(e.done))
              : e.done.length && !lst(e.done).ranges
                ? lst(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                  ? (e.done.pop(), lst(e.done))
                  : void 0;
          })(i, i.lastOp == r))
        )
          (s = lst(o.changes)),
            0 == cmp(t.from, t.to) && 0 == cmp(t.from, s.to)
              ? (s.to = changeEnd(t))
              : o.changes.push(historyChangeFromChange(e, t));
        else {
          var l = lst(i.done);
          for (
            (l && l.ranges) || pushSelectionToHistory(e.sel, i.done),
              o = {
                changes: [historyChangeFromChange(e, t)],
                generation: i.generation,
              },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(n),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = a),
          (i.lastOp = i.lastSelOp = r),
          (i.lastOrigin = i.lastSelOrigin = t.origin),
          s || signal(e, 'historyAdded');
      }
      function addSelectionToHistory(e, t, n, r) {
        var i = e.history,
          o = r && r.origin;
        n == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function selectionEventCanBeMerged(e, t, n, r) {
              var i = t.charAt(0);
              return (
                '*' == i ||
                ('+' == i &&
                  n.ranges.length == r.ranges.length &&
                  n.somethingSelected() == r.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              );
            })(e, o, lst(i.done), t)))
          ? (i.done[i.done.length - 1] = t)
          : pushSelectionToHistory(t, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = n),
          r && !1 !== r.clearRedo && clearSelectionEvents(i.undone);
      }
      function pushSelectionToHistory(e, t) {
        var n = lst(t);
        (n && n.ranges && n.equals(e)) || t.push(e);
      }
      function attachLocalSpans(e, t, n, r) {
        var i = t['spans_' + e.id],
          o = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(
          n,
        ) {
          n.markedSpans &&
            ((i || (i = t['spans_' + e.id] = {}))[o] = n.markedSpans),
            ++o;
        });
      }
      function removeClearedSpans(e) {
        if (!e) return null;
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared
            ? t || (t = e.slice(0, n))
            : t && t.push(e[n]);
        return t ? (t.length ? t : null) : e;
      }
      function mergeOldSpans(e, t) {
        var n = (function getOldSpans(e, t) {
            var n = t['spans_' + e.id];
            if (!n) return null;
            for (var r = [], i = 0; i < t.text.length; ++i)
              r.push(removeClearedSpans(n[i]));
            return r;
          })(e, t),
          r = stretchSpansOverChange(e, t);
        if (!n) return r;
        if (!r) return n;
        for (var i = 0; i < n.length; ++i) {
          var o = n[i],
            s = r[i];
          if (o && s)
            e: for (var a = 0; a < s.length; ++a) {
              for (var l = s[a], c = 0; c < o.length; ++c)
                if (o[c].marker == l.marker) continue e;
              o.push(l);
            }
          else s && (n[i] = s);
        }
        return n;
      }
      function copyHistoryArray(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.ranges) r.push(n ? me.prototype.deepCopy.call(o) : o);
          else {
            var s = o.changes,
              a = [];
            r.push({ changes: a });
            for (var l = 0; l < s.length; ++l) {
              var c = s[l],
                u = void 0;
              if ((a.push({ from: c.from, to: c.to, text: c.text }), t))
                for (var d in c)
                  (u = d.match(/^spans_(\d+)$/)) &&
                    indexOf(t, Number(u[1])) > -1 &&
                    ((lst(a)[d] = c[d]), delete c[d]);
            }
          }
        }
        return r;
      }
      function extendRange(e, t, n, r) {
        if (r) {
          var i = e.anchor;
          if (n) {
            var o = cmp(t, i) < 0;
            o != cmp(n, i) < 0
              ? ((i = t), (t = n))
              : o != cmp(t, n) < 0 && (t = n);
          }
          return new ve(i, t);
        }
        return new ve(n || t, t);
      }
      function extendSelection(e, t, n, r, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
          setSelection(
            e,
            new me([extendRange(e.sel.primary(), t, n, i)], 0),
            r,
          );
      }
      function extendSelections(e, t, n) {
        for (
          var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
          o < e.sel.ranges.length;
          o++
        )
          r[o] = extendRange(e.sel.ranges[o], t[o], null, i);
        setSelection(e, normalizeSelection(r, e.sel.primIndex), n);
      }
      function replaceOneSelection(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        (i[t] = n), setSelection(e, normalizeSelection(i, e.sel.primIndex), r);
      }
      function setSimpleSelection(e, t, n, r) {
        setSelection(e, simpleSelection(t, n), r);
      }
      function setSelectionReplaceHistory(e, t, n) {
        var r = e.history.done,
          i = lst(r);
        i && i.ranges
          ? ((r[r.length - 1] = t), setSelectionNoUndo(e, t, n))
          : setSelection(e, t, n);
      }
      function setSelection(e, t, n) {
        setSelectionNoUndo(e, t, n),
          addSelectionToHistory(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
      }
      function setSelectionNoUndo(e, t, n) {
        (hasHandler(e, 'beforeSelectionChange') ||
          (e.cm && hasHandler(e.cm, 'beforeSelectionChange'))) &&
          (t = (function filterSelectionChange(e, t, n) {
            var r = {
              ranges: t.ranges,
              update: function(t) {
                this.ranges = [];
                for (var n = 0; n < t.length; n++)
                  this.ranges[n] = new ve(
                    clipPos(e, t[n].anchor),
                    clipPos(e, t[n].head),
                  );
              },
              origin: n && n.origin,
            };
            return (
              signal(e, 'beforeSelectionChange', e, r),
              e.cm && signal(e.cm, 'beforeSelectionChange', e.cm, r),
              r.ranges != t.ranges
                ? normalizeSelection(r.ranges, r.ranges.length - 1)
                : t
            );
          })(e, t, n));
        setSelectionInner(
          e,
          skipAtomicInSelection(
            e,
            t,
            (n && n.bias) ||
              (cmp(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1),
            !0,
          ),
        ),
          (n && !1 === n.scroll) || !e.cm || ensureCursorVisible(e.cm);
      }
      function setSelectionInner(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0),
            signalCursorActivity(e.cm)),
          signalLater(e, 'cursorActivity', e));
      }
      function reCheckSelection(e) {
        setSelectionInner(e, skipAtomicInSelection(e, e.sel, null, !1));
      }
      function skipAtomicInSelection(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
          var s = t.ranges[o],
            a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            l = skipAtomic(e, s.anchor, a && a.anchor, n, r),
            c = skipAtomic(e, s.head, a && a.head, n, r);
          (i || l != s.anchor || c != s.head) &&
            (i || (i = t.ranges.slice(0, o)), (i[o] = new ve(l, c)));
        }
        return i ? normalizeSelection(i, t.primIndex) : t;
      }
      function skipAtomicInner(e, t, n, r, i) {
        var o = getLine(e, t.line);
        if (o.markedSpans)
          for (var s = 0; s < o.markedSpans.length; ++s) {
            var a = o.markedSpans[s],
              l = a.marker;
            if (
              (null == a.from ||
                (l.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) &&
              (null == a.to || (l.inclusiveRight ? a.to >= t.ch : a.to > t.ch))
            ) {
              if (i && (signal(l, 'beforeCursorEnter'), l.explicitlyCleared)) {
                if (o.markedSpans) {
                  --s;
                  continue;
                }
                break;
              }
              if (!l.atomic) continue;
              if (n) {
                var c = l.find(r < 0 ? 1 : -1),
                  u = void 0;
                if (
                  ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) &&
                    (c = movePos(e, c, -r, c && c.line == t.line ? o : null)),
                  c &&
                    c.line == t.line &&
                    (u = cmp(c, n)) &&
                    (r < 0 ? u < 0 : u > 0))
                )
                  return skipAtomicInner(e, c, t, r, i);
              }
              var d = l.find(r < 0 ? -1 : 1);
              return (
                (r < 0 ? l.inclusiveLeft : l.inclusiveRight) &&
                  (d = movePos(e, d, r, d.line == t.line ? o : null)),
                d ? skipAtomicInner(e, d, t, r, i) : null
              );
            }
          }
        return t;
      }
      function skipAtomic(e, t, n, r, i) {
        var o = r || 1,
          s =
            skipAtomicInner(e, t, n, o, i) ||
            (!i && skipAtomicInner(e, t, n, o, !0)) ||
            skipAtomicInner(e, t, n, -o, i) ||
            (!i && skipAtomicInner(e, t, n, -o, !0));
        return s || ((e.cantEdit = !0), Pos(e.first, 0));
      }
      function movePos(e, t, n, r) {
        return n < 0 && 0 == t.ch
          ? t.line > e.first ? clipPos(e, Pos(t.line - 1)) : null
          : n > 0 && t.ch == (r || getLine(e, t.line)).text.length
            ? t.line < e.first + e.size - 1 ? Pos(t.line + 1, 0) : null
            : new Pos(t.line, t.ch + n);
      }
      function selectAll(e) {
        e.setSelection(Pos(e.firstLine(), 0), Pos(e.lastLine()), A);
      }
      function filterChange(e, t, n) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return (r.canceled = !0);
          },
        };
        return (
          n &&
            (r.update = function(t, n, i, o) {
              t && (r.from = clipPos(e, t)),
                n && (r.to = clipPos(e, n)),
                i && (r.text = i),
                void 0 !== o && (r.origin = o);
            }),
          signal(e, 'beforeChange', e, r),
          e.cm && signal(e.cm, 'beforeChange', e.cm, r),
          r.canceled
            ? null
            : { from: r.from, to: r.to, text: r.text, origin: r.origin }
        );
      }
      function makeChange(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp) return operation(e.cm, makeChange)(e, t, n);
          if (e.cm.state.suppressEdits) return;
        }
        if (
          !(
            hasHandler(e, 'beforeChange') ||
            (e.cm && hasHandler(e.cm, 'beforeChange'))
          ) ||
          (t = filterChange(e, t, !0))
        ) {
          var r =
            I &&
            !n &&
            (function removeReadOnlyRanges(e, t, n) {
              var r = null;
              if (
                (e.iter(t.line, n.line + 1, function(e) {
                  if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                      var n = e.markedSpans[t].marker;
                      !n.readOnly ||
                        (r && -1 != indexOf(r, n)) ||
                        (r || (r = [])).push(n);
                    }
                }),
                !r)
              )
                return null;
              for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                for (var s = r[o], a = s.find(0), l = 0; l < i.length; ++l) {
                  var c = i[l];
                  if (!(cmp(c.to, a.from) < 0 || cmp(c.from, a.to) > 0)) {
                    var u = [l, 1],
                      d = cmp(c.from, a.from),
                      p = cmp(c.to, a.to);
                    (d < 0 || (!s.inclusiveLeft && !d)) &&
                      u.push({ from: c.from, to: a.from }),
                      (p > 0 || (!s.inclusiveRight && !p)) &&
                        u.push({ from: a.to, to: c.to }),
                      i.splice.apply(i, u),
                      (l += u.length - 3);
                  }
                }
              return i;
            })(e, t.from, t.to);
          if (r)
            for (var i = r.length - 1; i >= 0; --i)
              makeChangeInner(e, {
                from: r[i].from,
                to: r[i].to,
                text: i ? [''] : t.text,
                origin: t.origin,
              });
          else makeChangeInner(e, t);
        }
      }
      function makeChangeInner(e, t) {
        if (1 != t.text.length || '' != t.text[0] || 0 != cmp(t.from, t.to)) {
          var n = computeSelAfterChange(e, t);
          addChangeToHistory(e, t, n, e.cm ? e.cm.curOp.id : NaN),
            makeChangeSingleDoc(e, t, n, stretchSpansOverChange(e, t));
          var r = [];
          linkedDocs(e, function(e, n) {
            n ||
              -1 != indexOf(r, e.history) ||
              (rebaseHist(e.history, t), r.push(e.history)),
              makeChangeSingleDoc(e, t, null, stretchSpansOverChange(e, t));
          });
        }
      }
      function makeChangeFromHistory(e, t, n) {
        if (!e.cm || !e.cm.state.suppressEdits || n) {
          for (
            var r,
              i = e.history,
              o = e.sel,
              s = 'undo' == t ? i.done : i.undone,
              a = 'undo' == t ? i.undone : i.done,
              l = 0;
            l < s.length &&
            ((r = s[l]), n ? !r.ranges || r.equals(e.sel) : r.ranges);
            l++
          );
          if (l != s.length) {
            for (
              i.lastOrigin = i.lastSelOrigin = null;
              (r = s.pop()).ranges;

            ) {
              if ((pushSelectionToHistory(r, a), n && !r.equals(e.sel)))
                return void setSelection(e, r, { clearRedo: !1 });
              o = r;
            }
            var c = [];
            pushSelectionToHistory(o, a),
              a.push({ changes: c, generation: i.generation }),
              (i.generation = r.generation || ++i.maxGeneration);
            for (
              var u =
                  hasHandler(e, 'beforeChange') ||
                  (e.cm && hasHandler(e.cm, 'beforeChange')),
                d = function(n) {
                  var i = r.changes[n];
                  if (((i.origin = t), u && !filterChange(e, i, !1)))
                    return (s.length = 0), {};
                  c.push(historyChangeFromChange(e, i));
                  var o = n ? computeSelAfterChange(e, i) : lst(s);
                  makeChangeSingleDoc(e, i, o, mergeOldSpans(e, i)),
                    !n &&
                      e.cm &&
                      e.cm.scrollIntoView({ from: i.from, to: changeEnd(i) });
                  var a = [];
                  linkedDocs(e, function(e, t) {
                    t ||
                      -1 != indexOf(a, e.history) ||
                      (rebaseHist(e.history, i), a.push(e.history)),
                      makeChangeSingleDoc(e, i, null, mergeOldSpans(e, i));
                  });
                },
                p = r.changes.length - 1;
              p >= 0;
              --p
            ) {
              var h = d(p);
              if (h) return h.v;
            }
          }
        }
      }
      function shiftDoc(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new me(
            map(e.sel.ranges, function(e) {
              return new ve(
                Pos(e.anchor.line + t, e.anchor.ch),
                Pos(e.head.line + t, e.head.ch),
              );
            }),
            e.sel.primIndex,
          )),
          e.cm)
        ) {
          regChange(e.cm, e.first, e.first - t, t);
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            regLineChange(e.cm, r, 'gutter');
        }
      }
      function makeChangeSingleDoc(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
          return operation(e.cm, makeChangeSingleDoc)(e, t, n, r);
        if (t.to.line < e.first)
          shiftDoc(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            shiftDoc(e, i),
              (t = {
                from: Pos(e.first, 0),
                to: Pos(t.to.line + i, t.to.ch),
                text: [lst(t.text)],
                origin: t.origin,
              });
          }
          var o = e.lastLine();
          t.to.line > o &&
            (t = {
              from: t.from,
              to: Pos(o, getLine(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = getBetween(e, t.from, t.to)),
            n || (n = computeSelAfterChange(e, t)),
            e.cm
              ? (function makeChangeSingleDocInEditor(e, t, n) {
                  var r = e.doc,
                    i = e.display,
                    o = t.from,
                    s = t.to,
                    a = !1,
                    l = o.line;
                  e.options.lineWrapping ||
                    ((l = lineNo(visualLine(getLine(r, o.line)))),
                    r.iter(l, s.line + 1, function(e) {
                      if (e == i.maxLine) return (a = !0), !0;
                    }));
                  r.sel.contains(t.from, t.to) > -1 && signalCursorActivity(e);
                  updateDoc(r, t, n, estimateHeight(e)),
                    e.options.lineWrapping ||
                      (r.iter(l, o.line + t.text.length, function(e) {
                        var t = lineLength(e);
                        t > i.maxLineLength &&
                          ((i.maxLine = e),
                          (i.maxLineLength = t),
                          (i.maxLineChanged = !0),
                          (a = !1));
                      }),
                      a && (e.curOp.updateMaxLine = !0));
                  (function retreatFrontier(e, t) {
                    if (
                      ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                      !(e.highlightFrontier < t - 10))
                    ) {
                      for (var n = e.first, r = t - 1; r > n; r--) {
                        var i = getLine(e, r).stateAfter;
                        if (i && (!(i instanceof J) || r + i.lookAhead < t)) {
                          n = r + 1;
                          break;
                        }
                      }
                      e.highlightFrontier = Math.min(e.highlightFrontier, n);
                    }
                  })(r, o.line),
                    startWorker(e, 400);
                  var c = t.text.length - (s.line - o.line) - 1;
                  t.full
                    ? regChange(e)
                    : o.line != s.line ||
                      1 != t.text.length ||
                      isWholeLineUpdate(e.doc, t)
                      ? regChange(e, o.line, s.line + 1, c)
                      : regLineChange(e, o.line, 'text');
                  var u = hasHandler(e, 'changes'),
                    d = hasHandler(e, 'change');
                  if (d || u) {
                    var p = {
                      from: o,
                      to: s,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin,
                    };
                    d && signalLater(e, 'change', e, p),
                      u &&
                        (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(
                          p,
                        );
                  }
                  e.display.selForContextMenu = null;
                })(e.cm, t, r)
              : updateDoc(e, t, r),
            setSelectionNoUndo(e, n, A);
        }
      }
      function replaceRange(e, t, n, r, i) {
        if ((r || (r = n), cmp(r, n) < 0)) {
          var o;
          (n = (o = [r, n])[0]), (r = o[1]);
        }
        'string' == typeof t && (t = e.splitLines(t)),
          makeChange(e, { from: n, to: r, text: t, origin: i });
      }
      function rebaseHistSelSingle(e, t, n, r) {
        n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
      }
      function rebaseHistArray(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            s = !0;
          if (o.ranges) {
            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
            for (var a = 0; a < o.ranges.length; a++)
              rebaseHistSelSingle(o.ranges[a].anchor, t, n, r),
                rebaseHistSelSingle(o.ranges[a].head, t, n, r);
          } else {
            for (var l = 0; l < o.changes.length; ++l) {
              var c = o.changes[l];
              if (n < c.from.line)
                (c.from = Pos(c.from.line + r, c.from.ch)),
                  (c.to = Pos(c.to.line + r, c.to.ch));
              else if (t <= c.to.line) {
                s = !1;
                break;
              }
            }
            s || (e.splice(0, i + 1), (i = 0));
          }
        }
      }
      function rebaseHist(e, t) {
        var n = t.from.line,
          r = t.to.line,
          i = t.text.length - (r - n) - 1;
        rebaseHistArray(e.done, n, r, i), rebaseHistArray(e.undone, n, r, i);
      }
      function changeLine(e, t, n, r) {
        var i = t,
          o = t;
        return (
          'number' == typeof t
            ? (o = getLine(e, clipLine(e, t)))
            : (i = lineNo(t)),
          null == i ? null : (r(o, i) && e.cm && regLineChange(e.cm, i, n), o)
        );
      }
      function LeafChunk(e) {
        (this.lines = e), (this.parent = null);
        for (var t = 0, n = 0; n < e.length; ++n)
          (e[n].parent = this), (t += e[n].height);
        this.height = t;
      }
      LeafChunk.prototype = {
        chunkSize: function chunkSize() {
          return this.lines.length;
        },
        removeInner: function removeInner(e, t) {
          for (var n = e, r = e + t; n < r; ++n) {
            var i = this.lines[n];
            (this.height -= i.height),
              ((o = i).parent = null),
              detachMarkedSpans(o),
              signalLater(i, 'delete');
          }
          var o;
          this.lines.splice(e, t);
        },
        collapse: function collapse(e) {
          e.push.apply(e, this.lines);
        },
        insertInner: function insertInner(e, t, n) {
          (this.height += n),
            (this.lines = this.lines
              .slice(0, e)
              .concat(t)
              .concat(this.lines.slice(e)));
          for (var r = 0; r < t.length; ++r) t[r].parent = this;
        },
        iterN: function iterN(e, t, n) {
          for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
        },
      };
      function BranchChunk(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var i = e[r];
          (t += i.chunkSize()), (n += i.height), (i.parent = this);
        }
        (this.size = t), (this.height = n), (this.parent = null);
      }
      BranchChunk.prototype = {
        chunkSize: function chunkSize() {
          return this.size;
        },
        removeInner: function removeInner(e, t) {
          this.size -= t;
          for (var n = 0; n < this.children.length; ++n) {
            var r = this.children[n],
              i = r.chunkSize();
            if (e < i) {
              var o = Math.min(t, i - e),
                s = r.height;
              if (
                (r.removeInner(e, o),
                (this.height -= s - r.height),
                i == o && (this.children.splice(n--, 1), (r.parent = null)),
                0 == (t -= o))
              )
                break;
              e = 0;
            } else e -= i;
          }
          if (
            this.size - t < 25 &&
            (this.children.length > 1 ||
              !(this.children[0] instanceof LeafChunk))
          ) {
            var a = [];
            this.collapse(a),
              (this.children = [new LeafChunk(a)]),
              (this.children[0].parent = this);
          }
        },
        collapse: function collapse(e) {
          for (var t = 0; t < this.children.length; ++t)
            this.children[t].collapse(e);
        },
        insertInner: function insertInner(e, t, n) {
          (this.size += t.length), (this.height += n);
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r],
              o = i.chunkSize();
            if (e <= o) {
              if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                for (
                  var s = i.lines.length % 25 + 25, a = s;
                  a < i.lines.length;

                ) {
                  var l = new LeafChunk(i.lines.slice(a, (a += 25)));
                  (i.height -= l.height),
                    this.children.splice(++r, 0, l),
                    (l.parent = this);
                }
                (i.lines = i.lines.slice(0, s)), this.maybeSpill();
              }
              break;
            }
            e -= o;
          }
        },
        maybeSpill: function maybeSpill() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var t = new BranchChunk(
                e.children.splice(e.children.length - 5, 5),
              );
              if (e.parent) {
                (e.size -= t.size), (e.height -= t.height);
                var n = indexOf(e.parent.children, e);
                e.parent.children.splice(n + 1, 0, t);
              } else {
                var r = new BranchChunk(e.children);
                (r.parent = e), (e.children = [r, t]), (e = r);
              }
              t.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function iterN(e, t, n) {
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r],
              o = i.chunkSize();
            if (e < o) {
              var s = Math.min(t, o - e);
              if (i.iterN(e, s, n)) return !0;
              if (0 == (t -= s)) break;
              e = 0;
            } else e -= o;
          }
        },
      };
      var ye = function(e, t, n) {
        if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
        (this.doc = e), (this.node = t);
      };
      (ye.prototype.clear = function() {
        var e = this.doc.cm,
          t = this.line.widgets,
          n = this.line,
          r = lineNo(n);
        if (null != r && t) {
          for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
          t.length || (n.widgets = null);
          var o = widgetHeight(this);
          updateLineHeight(n, Math.max(0, n.height - o)),
            e &&
              (runInOp(e, function() {
                adjustScrollWhenAboveVisible(e, n, -o),
                  regLineChange(e, r, 'widget');
              }),
              signalLater(e, 'lineWidgetCleared', e, this, r));
        }
      }),
        (ye.prototype.changed = function() {
          var e = this,
            t = this.height,
            n = this.doc.cm,
            r = this.line;
          this.height = null;
          var i = widgetHeight(this) - t;
          i &&
            (updateLineHeight(r, r.height + i),
            n &&
              runInOp(n, function() {
                (n.curOp.forceUpdate = !0),
                  adjustScrollWhenAboveVisible(n, r, i),
                  signalLater(n, 'lineWidgetChanged', n, e, lineNo(r));
              }));
        }),
        eventMixin(ye);
      function adjustScrollWhenAboveVisible(e, t, n) {
        heightAtLine(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
          addToScrollTop(e, n);
      }
      var be = 0,
        Ce = function(e, t) {
          (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++be);
        };
      (Ce.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            t = e && !e.curOp;
          if ((t && startOperation(e), hasHandler(this, 'clear'))) {
            var n = this.find();
            n && signalLater(this, 'clear', n.from, n.to);
          }
          for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
            var s = this.lines[o],
              a = getMarkedSpanFor(s.markedSpans, this);
            e && !this.collapsed
              ? regLineChange(e, lineNo(s), 'text')
              : e &&
                (null != a.to && (i = lineNo(s)),
                null != a.from && (r = lineNo(s))),
              (s.markedSpans = removeMarkedSpan(s.markedSpans, a)),
              null == a.from &&
                this.collapsed &&
                !lineIsHidden(this.doc, s) &&
                e &&
                updateLineHeight(s, textHeight(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var c = visualLine(this.lines[l]),
                u = lineLength(c);
              u > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = u),
                (e.display.maxLineChanged = !0));
            }
          null != r && e && this.collapsed && regChange(e, r, i + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && reCheckSelection(e.doc)),
            e && signalLater(e, 'markerCleared', e, this, r, i),
            t && endOperation(e),
            this.parent && this.parent.clear();
        }
      }),
        (Ce.prototype.find = function(e, t) {
          null == e && 'bookmark' == this.type && (e = 1);
          for (var n, r, i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
              s = getMarkedSpanFor(o.markedSpans, this);
            if (
              null != s.from &&
              ((n = Pos(t ? o : lineNo(o), s.from)), -1 == e)
            )
              return n;
            if (null != s.to && ((r = Pos(t ? o : lineNo(o), s.to)), 1 == e))
              return r;
          }
          return n && { from: n, to: r };
        }),
        (Ce.prototype.changed = function() {
          var e = this,
            t = this.find(-1, !0),
            n = this,
            r = this.doc.cm;
          t &&
            r &&
            runInOp(r, function() {
              var i = t.line,
                o = lineNo(t.line),
                s = findViewForLine(r, o);
              if (
                (s &&
                  (clearLineMeasurementCacheFor(s),
                  (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                (r.curOp.updateMaxLine = !0),
                !lineIsHidden(n.doc, i) && null != n.height)
              ) {
                var a = n.height;
                n.height = null;
                var l = widgetHeight(n) - a;
                l && updateLineHeight(i, i.height + l);
              }
              signalLater(r, 'markerChanged', r, e);
            });
        }),
        (Ce.prototype.attachLine = function(e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers &&
              -1 != indexOf(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this,
              );
          }
          this.lines.push(e);
        }),
        (Ce.prototype.detachLine = function(e) {
          if (
            (this.lines.splice(indexOf(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }),
        eventMixin(Ce);
      function markText(e, t, n, r, i) {
        if (r && r.shared)
          return (function markTextShared(e, t, n, r, i) {
            (r = copyObj(r)).shared = !1;
            var o = [markText(e, t, n, r, i)],
              s = o[0],
              a = r.widgetNode;
            return (
              linkedDocs(e, function(e) {
                a && (r.widgetNode = a.cloneNode(!0)),
                  o.push(markText(e, clipPos(e, t), clipPos(e, n), r, i));
                for (var l = 0; l < e.linked.length; ++l)
                  if (e.linked[l].isParent) return;
                s = lst(o);
              }),
              new xe(o, s)
            );
          })(e, t, n, r, i);
        if (e.cm && !e.cm.curOp)
          return operation(e.cm, markText)(e, t, n, r, i);
        var o = new Ce(e, i),
          s = cmp(t, n);
        if (
          (r && copyObj(r, o, !1), s > 0 || (0 == s && !1 !== o.clearWhenEmpty))
        )
          return o;
        if (
          (o.replacedWith &&
            ((o.collapsed = !0),
            (o.widgetNode = eltP(
              'span',
              [o.replacedWith],
              'CodeMirror-widget',
            )),
            r.handleMouseEvents ||
              o.widgetNode.setAttribute('cm-ignore-events', 'true'),
            r.insertLeft && (o.widgetNode.insertLeft = !0)),
          o.collapsed)
        ) {
          if (
            conflictingCollapsedRange(e, t.line, t, n, o) ||
            (t.line != n.line && conflictingCollapsedRange(e, n.line, t, n, o))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one',
            );
          !(function seeCollapsedSpans() {
            F = !0;
          })();
        }
        o.addToHistory &&
          addChangeToHistory(
            e,
            { from: t, to: n, origin: 'markText' },
            e.sel,
            NaN,
          );
        var a,
          l = t.line,
          c = e.cm;
        if (
          (e.iter(l, n.line + 1, function(e) {
            c &&
              o.collapsed &&
              !c.options.lineWrapping &&
              visualLine(e) == c.display.maxLine &&
              (a = !0),
              o.collapsed && l != t.line && updateLineHeight(e, 0),
              (function addMarkedSpan(e, t) {
                (e.markedSpans = e.markedSpans
                  ? e.markedSpans.concat([t])
                  : [t]),
                  t.marker.attachLine(e);
              })(
                e,
                new MarkedSpan(
                  o,
                  l == t.line ? t.ch : null,
                  l == n.line ? n.ch : null,
                ),
              ),
              ++l;
          }),
          o.collapsed &&
            e.iter(t.line, n.line + 1, function(t) {
              lineIsHidden(e, t) && updateLineHeight(t, 0);
            }),
          o.clearOnEnter &&
            V(o, 'beforeCursorEnter', function() {
              return o.clear();
            }),
          o.readOnly &&
            (!(function seeReadOnlySpans() {
              I = !0;
            })(),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          o.collapsed && ((o.id = ++be), (o.atomic = !0)),
          c)
        ) {
          if ((a && (c.curOp.updateMaxLine = !0), o.collapsed))
            regChange(c, t.line, n.line + 1);
          else if (
            o.className ||
            o.title ||
            o.startStyle ||
            o.endStyle ||
            o.css
          )
            for (var u = t.line; u <= n.line; u++) regLineChange(c, u, 'text');
          o.atomic && reCheckSelection(c.doc),
            signalLater(c, 'markerAdded', c, o);
        }
        return o;
      }
      var xe = function(e, t) {
        (this.markers = e), (this.primary = t);
        for (var n = 0; n < e.length; ++n) e[n].parent = this;
      };
      (xe.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
          signalLater(this, 'clear');
        }
      }),
        (xe.prototype.find = function(e, t) {
          return this.primary.find(e, t);
        }),
        eventMixin(xe);
      function findSharedMarkers(e) {
        return e.findMarks(
          Pos(e.first, 0),
          e.clipPos(Pos(e.lastLine())),
          function(e) {
            return e.parent;
          },
        );
      }
      function detachSharedMarkers(e) {
        for (
          var t = function(t) {
              var n = e[t],
                r = [n.primary.doc];
              linkedDocs(n.primary.doc, function(e) {
                return r.push(e);
              });
              for (var i = 0; i < n.markers.length; i++) {
                var o = n.markers[i];
                -1 == indexOf(r, o.doc) &&
                  ((o.parent = null), n.markers.splice(i--, 1));
              }
            },
            n = 0;
          n < e.length;
          n++
        )
          t(n);
      }
      var we = 0,
        Se = function(e, t, n, r, i) {
          if (!(this instanceof Se)) return new Se(e, t, n, r, i);
          null == n && (n = 0),
            BranchChunk.call(this, [new LeafChunk([new ne('', null)])]),
            (this.first = n),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = n);
          var o = Pos(n, 0);
          (this.sel = simpleSelection(o)),
            (this.history = new History(null)),
            (this.id = ++we),
            (this.modeOption = t),
            (this.lineSep = r),
            (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof e && (e = this.splitLines(e)),
            updateDoc(this, { from: o, to: o, text: e }),
            setSelection(this, simpleSelection(o), A);
        };
      (Se.prototype = createObj(BranchChunk.prototype, {
        constructor: Se,
        iter: function(e, t, n) {
          n
            ? this.iterN(e - this.first, t - e, n)
            : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function(e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t);
        },
        getValue: function(e) {
          var t = getLines(this, this.first, this.first + this.size);
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        setValue: docMethodOp(function(e) {
          var t = Pos(this.first, 0),
            n = this.first + this.size - 1;
          makeChange(
            this,
            {
              from: t,
              to: Pos(n, getLine(this, n).text.length),
              text: this.splitLines(e),
              origin: 'setValue',
              full: !0,
            },
            !0,
          ),
            this.cm && scrollToCoords(this.cm, 0, 0),
            setSelection(this, simpleSelection(t), A);
        }),
        replaceRange: function(e, t, n, r) {
          replaceRange(
            this,
            e,
            (t = clipPos(this, t)),
            (n = n ? clipPos(this, n) : t),
            r,
          );
        },
        getRange: function(e, t, n) {
          var r = getBetween(this, clipPos(this, e), clipPos(this, t));
          return !1 === n ? r : r.join(n || this.lineSeparator());
        },
        getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function(e) {
          if (isLine(this, e)) return getLine(this, e);
        },
        getLineNumber: function(e) {
          return lineNo(e);
        },
        getLineHandleVisualStart: function(e) {
          return 'number' == typeof e && (e = getLine(this, e)), visualLine(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return clipPos(this, e);
        },
        getCursor: function(e) {
          var t = this.sel.primary();
          return null == e || 'head' == e
            ? t.head
            : 'anchor' == e
              ? t.anchor
              : 'end' == e || 'to' == e || !1 === e ? t.to() : t.from();
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: docMethodOp(function(e, t, n) {
          setSimpleSelection(
            this,
            clipPos(this, 'number' == typeof e ? Pos(e, t || 0) : e),
            null,
            n,
          );
        }),
        setSelection: docMethodOp(function(e, t, n) {
          setSimpleSelection(this, clipPos(this, e), clipPos(this, t || e), n);
        }),
        extendSelection: docMethodOp(function(e, t, n) {
          extendSelection(this, clipPos(this, e), t && clipPos(this, t), n);
        }),
        extendSelections: docMethodOp(function(e, t) {
          extendSelections(this, clipPosArray(this, e), t);
        }),
        extendSelectionsBy: docMethodOp(function(e, t) {
          extendSelections(
            this,
            clipPosArray(this, map(this.sel.ranges, e)),
            t,
          );
        }),
        setSelections: docMethodOp(function(e, t, n) {
          if (e.length) {
            for (var r = [], i = 0; i < e.length; i++)
              r[i] = new ve(
                clipPos(this, e[i].anchor),
                clipPos(this, e[i].head),
              );
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              setSelection(this, normalizeSelection(r, t), n);
          }
        }),
        addSelection: docMethodOp(function(e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new ve(clipPos(this, e), clipPos(this, t || e))),
            setSelection(this, normalizeSelection(r, r.length - 1), n);
        }),
        getSelection: function(e) {
          for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = getBetween(this, n[r].from(), n[r].to());
            t = t ? t.concat(i) : i;
          }
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = getBetween(this, n[r].from(), n[r].to());
            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
          }
          return t;
        },
        replaceSelection: function(e, t, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
          this.replaceSelections(r, t, n || '+input');
        },
        replaceSelections: docMethodOp(function(e, t, n) {
          for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var s = i.ranges[o];
            r[o] = {
              from: s.from(),
              to: s.to(),
              text: this.splitLines(e[o]),
              origin: n,
            };
          }
          for (
            var a =
                t &&
                'end' != t &&
                (function computeReplacedSel(e, t, n) {
                  for (
                    var r = [], i = Pos(e.first, 0), o = i, s = 0;
                    s < t.length;
                    s++
                  ) {
                    var a = t[s],
                      l = offsetPos(a.from, i, o),
                      c = offsetPos(changeEnd(a), i, o);
                    if (((i = a.to), (o = c), 'around' == n)) {
                      var u = e.sel.ranges[s],
                        d = cmp(u.head, u.anchor) < 0;
                      r[s] = new ve(d ? c : l, d ? l : c);
                    } else r[s] = new ve(l, l);
                  }
                  return new me(r, e.sel.primIndex);
                })(this, r, t),
              l = r.length - 1;
            l >= 0;
            l--
          )
            makeChange(this, r[l]);
          a
            ? setSelectionReplaceHistory(this, a)
            : this.cm && ensureCursorVisible(this.cm);
        }),
        undo: docMethodOp(function() {
          makeChangeFromHistory(this, 'undo');
        }),
        redo: docMethodOp(function() {
          makeChangeFromHistory(this, 'redo');
        }),
        undoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, 'undo', !0);
        }),
        redoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, 'redo', !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (
            var e = this.history, t = 0, n = 0, r = 0;
            r < e.done.length;
            r++
          )
            e.done[r].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function() {
          this.history = new History(this.history.maxGeneration);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return (
            e &&
              (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
          );
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone),
          };
        },
        setHistory: function(e) {
          var t = (this.history = new History(this.history.maxGeneration));
          (t.done = copyHistoryArray(e.done.slice(0), null, !0)),
            (t.undone = copyHistoryArray(e.undone.slice(0), null, !0));
        },
        setGutterMarker: docMethodOp(function(e, t, n) {
          return changeLine(this, e, 'gutter', function(e) {
            var r = e.gutterMarkers || (e.gutterMarkers = {});
            return (r[t] = n), !n && isEmpty(r) && (e.gutterMarkers = null), !0;
          });
        }),
        clearGutter: docMethodOp(function(e) {
          var t = this;
          this.iter(function(n) {
            n.gutterMarkers &&
              n.gutterMarkers[e] &&
              changeLine(t, n, 'gutter', function() {
                return (
                  (n.gutterMarkers[e] = null),
                  isEmpty(n.gutterMarkers) && (n.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function(e) {
          var t;
          if ('number' == typeof e) {
            if (!isLine(this, e)) return null;
            if (((t = e), !(e = getLine(this, e)))) return null;
          } else if (null == (t = lineNo(e))) return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          };
        },
        addLineClass: docMethodOp(function(e, t, n) {
          return changeLine(
            this,
            e,
            'gutter' == t ? 'gutter' : 'class',
            function(e) {
              var r =
                'text' == t
                  ? 'textClass'
                  : 'background' == t
                    ? 'bgClass'
                    : 'gutter' == t ? 'gutterClass' : 'wrapClass';
              if (e[r]) {
                if (classTest(n).test(e[r])) return !1;
                e[r] += ' ' + n;
              } else e[r] = n;
              return !0;
            },
          );
        }),
        removeLineClass: docMethodOp(function(e, t, n) {
          return changeLine(
            this,
            e,
            'gutter' == t ? 'gutter' : 'class',
            function(e) {
              var r =
                  'text' == t
                    ? 'textClass'
                    : 'background' == t
                      ? 'bgClass'
                      : 'gutter' == t ? 'gutterClass' : 'wrapClass',
                i = e[r];
              if (!i) return !1;
              if (null == n) e[r] = null;
              else {
                var o = i.match(classTest(n));
                if (!o) return !1;
                var s = o.index + o[0].length;
                e[r] =
                  i.slice(0, o.index) +
                    (o.index && s != i.length ? ' ' : '') +
                    i.slice(s) || null;
              }
              return !0;
            },
          );
        }),
        addLineWidget: docMethodOp(function(e, t, n) {
          return (function addLineWidget(e, t, n, r) {
            var i = new ye(e, n, r),
              o = e.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              changeLine(e, t, 'widget', function(t) {
                var n = t.widgets || (t.widgets = []);
                if (
                  (null == i.insertAt
                    ? n.push(i)
                    : n.splice(
                        Math.min(n.length - 1, Math.max(0, i.insertAt)),
                        0,
                        i,
                      ),
                  (i.line = t),
                  o && !lineIsHidden(e, t))
                ) {
                  var r = heightAtLine(t) < e.scrollTop;
                  updateLineHeight(t, t.height + widgetHeight(i)),
                    r && addToScrollTop(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              signalLater(
                o,
                'lineWidgetAdded',
                o,
                i,
                'number' == typeof t ? t : lineNo(t),
              ),
              i
            );
          })(this, e, t, n);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, t, n) {
          return markText(
            this,
            clipPos(this, e),
            clipPos(this, t),
            n,
            (n && n.type) || 'range',
          );
        },
        setBookmark: function(e, t) {
          var n = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          };
          return markText(this, (e = clipPos(this, e)), e, n, 'bookmark');
        },
        findMarksAt: function(e) {
          var t = [],
            n = getLine(this, (e = clipPos(this, e)).line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (null == i.from || i.from <= e.ch) &&
                (null == i.to || i.to >= e.ch) &&
                t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function(e, t, n) {
          (e = clipPos(this, e)), (t = clipPos(this, t));
          var r = [],
            i = e.line;
          return (
            this.iter(e.line, t.line + 1, function(o) {
              var s = o.markedSpans;
              if (s)
                for (var a = 0; a < s.length; a++) {
                  var l = s[a];
                  (null != l.to && i == e.line && e.ch >= l.to) ||
                    (null == l.from && i != e.line) ||
                    (null != l.from && i == t.line && l.from >= t.ch) ||
                    (n && !n(l.marker)) ||
                    r.push(l.marker.parent || l.marker);
                }
              ++i;
            }),
            r
          );
        },
        getAllMarks: function() {
          var e = [];
          return (
            this.iter(function(t) {
              var n = t.markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r)
                  null != n[r].from && e.push(n[r].marker);
            }),
            e
          );
        },
        posFromIndex: function(e) {
          var t,
            n = this.first,
            r = this.lineSeparator().length;
          return (
            this.iter(function(i) {
              var o = i.text.length + r;
              if (o > e) return (t = e), !0;
              (e -= o), ++n;
            }),
            clipPos(this, Pos(n, t))
          );
        },
        indexFromPos: function(e) {
          var t = (e = clipPos(this, e)).ch;
          if (e.line < this.first || e.ch < 0) return 0;
          var n = this.lineSeparator().length;
          return (
            this.iter(this.first, e.line, function(e) {
              t += e.text.length + n;
            }),
            t
          );
        },
        copy: function(e) {
          var t = new Se(
            getLines(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction,
          );
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          );
        },
        linkedDoc: function(e) {
          e || (e = {});
          var t = this.first,
            n = this.first + this.size;
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < n && (n = e.to);
          var r = new Se(
            getLines(this, t, n),
            e.mode || this.modeOption,
            t,
            this.lineSep,
            this.direction,
          );
          return (
            e.sharedHist && (r.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: e.sharedHist,
            }),
            (r.linked = [
              { doc: this, isParent: !0, sharedHist: e.sharedHist },
            ]),
            (function copySharedMarkers(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                  i = r.find(),
                  o = e.clipPos(i.from),
                  s = e.clipPos(i.to);
                if (cmp(o, s)) {
                  var a = markText(e, o, s, r.primary, r.primary.type);
                  r.markers.push(a), (a.parent = r);
                }
              }
            })(r, findSharedMarkers(this)),
            r
          );
        },
        unlinkDoc: function(e) {
          if ((e instanceof CodeMirror$1 && (e = e.doc), this.linked))
            for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1),
                  e.unlinkDoc(this),
                  detachSharedMarkers(findSharedMarkers(this));
                break;
              }
            }
          if (e.history == this.history) {
            var n = [e.id];
            linkedDocs(
              e,
              function(e) {
                return n.push(e.id);
              },
              !0,
            ),
              (e.history = new History(null)),
              (e.history.done = copyHistoryArray(this.history.done, n)),
              (e.history.undone = copyHistoryArray(this.history.undone, n));
          }
        },
        iterLinkedDocs: function(e) {
          linkedDocs(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : K(e);
        },
        lineSeparator: function() {
          return this.lineSep || '\n';
        },
        setDirection: docMethodOp(function(e) {
          'rtl' != e && (e = 'ltr'),
            e != this.direction &&
              ((this.direction = e),
              this.iter(function(e) {
                return (e.order = null);
              }),
              this.cm &&
                (function directionChanged(e) {
                  runInOp(e, function() {
                    setDirectionClass(e), regChange(e);
                  });
                })(this.cm));
        }),
      })),
        (Se.prototype.eachLine = Se.prototype.iter);
      var ke = 0;
      function onDrop(e) {
        var t = this;
        if (
          (clearDragCursor(t),
          !signalDOMEvent(t, e) && !eventInWidget(t.display, e))
        ) {
          e_preventDefault(e), s && (ke = +new Date());
          var n = posFromMouse(t, e, !0),
            r = e.dataTransfer.files;
          if (n && !t.isReadOnly())
            if (r && r.length && window.FileReader && window.File)
              for (
                var i = r.length,
                  o = Array(i),
                  a = 0,
                  l = function(e, r) {
                    if (
                      !t.options.allowDropFileTypes ||
                      -1 != indexOf(t.options.allowDropFileTypes, e.type)
                    ) {
                      var s = new FileReader();
                      (s.onload = operation(t, function() {
                        var e = s.result;
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ''),
                          (o[r] = e),
                          ++a == i)
                        ) {
                          var l = {
                            from: (n = clipPos(t.doc, n)),
                            to: n,
                            text: t.doc.splitLines(
                              o.join(t.doc.lineSeparator()),
                            ),
                            origin: 'paste',
                          };
                          makeChange(t.doc, l),
                            setSelectionReplaceHistory(
                              t.doc,
                              simpleSelection(n, changeEnd(l)),
                            );
                        }
                      })),
                        s.readAsText(e);
                    }
                  },
                  c = 0;
                c < i;
                ++c
              )
                l(r[c], c);
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function() {
                    return t.display.input.focus();
                  }, 20)
                );
              try {
                var u = e.dataTransfer.getData('Text');
                if (u) {
                  var d;
                  if (
                    (t.state.draggingText &&
                      !t.state.draggingText.copy &&
                      (d = t.listSelections()),
                    setSelectionNoUndo(t.doc, simpleSelection(n, n)),
                    d)
                  )
                    for (var p = 0; p < d.length; ++p)
                      replaceRange(t.doc, '', d[p].anchor, d[p].head, 'drag');
                  t.replaceSelection(u, 'around', 'paste'),
                    t.display.input.focus();
                }
              } catch (e) {}
            }
        }
      }
      function clearDragCursor(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null));
      }
      function forEachCodeMirror(e) {
        if (document.getElementsByClassName)
          for (
            var t = document.getElementsByClassName('CodeMirror'), n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n].CodeMirror;
            r && e(r);
          }
      }
      var Le = !1;
      function ensureGlobalHandlers() {
        Le ||
          (!(function registerGlobalHandlers() {
            var e;
            V(window, 'resize', function() {
              null == e &&
                (e = setTimeout(function() {
                  (e = null), forEachCodeMirror(onResize);
                }, 100));
            }),
              V(window, 'blur', function() {
                return forEachCodeMirror(onBlur);
              });
          })(),
          (Le = !0));
      }
      function onResize(e) {
        var t = e.display;
        (t.lastWrapHeight == t.wrapper.clientHeight &&
          t.lastWrapWidth == t.wrapper.clientWidth) ||
          ((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize());
      }
      for (
        var Me = {
            3: 'Enter',
            8: 'Backspace',
            9: 'Tab',
            13: 'Enter',
            16: 'Shift',
            17: 'Ctrl',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Esc',
            32: 'Space',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'Left',
            38: 'Up',
            39: 'Right',
            40: 'Down',
            44: 'PrintScrn',
            45: 'Insert',
            46: 'Delete',
            59: ';',
            61: '=',
            91: 'Mod',
            92: 'Mod',
            93: 'Mod',
            106: '*',
            107: '=',
            109: '-',
            110: '.',
            111: '/',
            127: 'Delete',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            63232: 'Up',
            63233: 'Down',
            63234: 'Left',
            63235: 'Right',
            63272: 'Delete',
            63273: 'Home',
            63275: 'End',
            63276: 'PageUp',
            63277: 'PageDown',
            63302: 'Insert',
          },
          Te = 0;
        Te < 10;
        Te++
      )
        Me[Te + 48] = Me[Te + 96] = String(Te);
      for (var Oe = 65; Oe <= 90; Oe++) Me[Oe] = String.fromCharCode(Oe);
      for (var Pe = 1; Pe <= 12; Pe++) Me[Pe + 111] = Me[Pe + 63235] = 'F' + Pe;
      var Ae = {};
      (Ae.basic = {
        Left: 'goCharLeft',
        Right: 'goCharRight',
        Up: 'goLineUp',
        Down: 'goLineDown',
        End: 'goLineEnd',
        Home: 'goLineStartSmart',
        PageUp: 'goPageUp',
        PageDown: 'goPageDown',
        Delete: 'delCharAfter',
        Backspace: 'delCharBefore',
        'Shift-Backspace': 'delCharBefore',
        Tab: 'defaultTab',
        'Shift-Tab': 'indentAuto',
        Enter: 'newlineAndIndent',
        Insert: 'toggleOverwrite',
        Esc: 'singleSelection',
      }),
        (Ae.pcDefault = {
          'Ctrl-A': 'selectAll',
          'Ctrl-D': 'deleteLine',
          'Ctrl-Z': 'undo',
          'Shift-Ctrl-Z': 'redo',
          'Ctrl-Y': 'redo',
          'Ctrl-Home': 'goDocStart',
          'Ctrl-End': 'goDocEnd',
          'Ctrl-Up': 'goLineUp',
          'Ctrl-Down': 'goLineDown',
          'Ctrl-Left': 'goGroupLeft',
          'Ctrl-Right': 'goGroupRight',
          'Alt-Left': 'goLineStart',
          'Alt-Right': 'goLineEnd',
          'Ctrl-Backspace': 'delGroupBefore',
          'Ctrl-Delete': 'delGroupAfter',
          'Ctrl-S': 'save',
          'Ctrl-F': 'find',
          'Ctrl-G': 'findNext',
          'Shift-Ctrl-G': 'findPrev',
          'Shift-Ctrl-F': 'replace',
          'Shift-Ctrl-R': 'replaceAll',
          'Ctrl-[': 'indentLess',
          'Ctrl-]': 'indentMore',
          'Ctrl-U': 'undoSelection',
          'Shift-Ctrl-U': 'redoSelection',
          'Alt-U': 'redoSelection',
          fallthrough: 'basic',
        }),
        (Ae.emacsy = {
          'Ctrl-F': 'goCharRight',
          'Ctrl-B': 'goCharLeft',
          'Ctrl-P': 'goLineUp',
          'Ctrl-N': 'goLineDown',
          'Alt-F': 'goWordRight',
          'Alt-B': 'goWordLeft',
          'Ctrl-A': 'goLineStart',
          'Ctrl-E': 'goLineEnd',
          'Ctrl-V': 'goPageDown',
          'Shift-Ctrl-V': 'goPageUp',
          'Ctrl-D': 'delCharAfter',
          'Ctrl-H': 'delCharBefore',
          'Alt-D': 'delWordAfter',
          'Alt-Backspace': 'delWordBefore',
          'Ctrl-K': 'killLine',
          'Ctrl-T': 'transposeChars',
          'Ctrl-O': 'openLine',
        }),
        (Ae.macDefault = {
          'Cmd-A': 'selectAll',
          'Cmd-D': 'deleteLine',
          'Cmd-Z': 'undo',
          'Shift-Cmd-Z': 'redo',
          'Cmd-Y': 'redo',
          'Cmd-Home': 'goDocStart',
          'Cmd-Up': 'goDocStart',
          'Cmd-End': 'goDocEnd',
          'Cmd-Down': 'goDocEnd',
          'Alt-Left': 'goGroupLeft',
          'Alt-Right': 'goGroupRight',
          'Cmd-Left': 'goLineLeft',
          'Cmd-Right': 'goLineRight',
          'Alt-Backspace': 'delGroupBefore',
          'Ctrl-Alt-Backspace': 'delGroupAfter',
          'Alt-Delete': 'delGroupAfter',
          'Cmd-S': 'save',
          'Cmd-F': 'find',
          'Cmd-G': 'findNext',
          'Shift-Cmd-G': 'findPrev',
          'Cmd-Alt-F': 'replace',
          'Shift-Cmd-Alt-F': 'replaceAll',
          'Cmd-[': 'indentLess',
          'Cmd-]': 'indentMore',
          'Cmd-Backspace': 'delWrappedLineLeft',
          'Cmd-Delete': 'delWrappedLineRight',
          'Cmd-U': 'undoSelection',
          'Shift-Cmd-U': 'redoSelection',
          'Ctrl-Up': 'goDocStart',
          'Ctrl-Down': 'goDocEnd',
          fallthrough: ['basic', 'emacsy'],
        }),
        (Ae.default = y ? Ae.macDefault : Ae.pcDefault);
      function normalizeKeyName(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var n, r, i, o, s = 0; s < t.length - 1; s++) {
          var a = t[s];
          if (/^(cmd|meta|m)$/i.test(a)) o = !0;
          else if (/^a(lt)?$/i.test(a)) n = !0;
          else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
          else {
            if (!/^s(hift)?$/i.test(a))
              throw new Error('Unrecognized modifier name: ' + a);
            i = !0;
          }
        }
        return (
          n && (e = 'Alt-' + e),
          r && (e = 'Ctrl-' + e),
          o && (e = 'Cmd-' + e),
          i && (e = 'Shift-' + e),
          e
        );
      }
      function normalizeKeyMap(e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
            if ('...' == r) {
              delete e[n];
              continue;
            }
            for (
              var i = map(n.split(' '), normalizeKeyName), o = 0;
              o < i.length;
              o++
            ) {
              var s = void 0,
                a = void 0;
              o == i.length - 1
                ? ((a = i.join(' ')), (s = r))
                : ((a = i.slice(0, o + 1).join(' ')), (s = '...'));
              var l = t[a];
              if (l) {
                if (l != s) throw new Error('Inconsistent bindings for ' + a);
              } else t[a] = s;
            }
            delete e[n];
          }
        for (var c in t) e[c] = t[c];
        return e;
      }
      function lookupKey(e, t, n, r) {
        var i = (t = getKeyMap(t)).call ? t.call(e, r) : t[e];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && n(i)) return 'handled';
        if (t.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(t.fallthrough))
            return lookupKey(e, t.fallthrough, n, r);
          for (var o = 0; o < t.fallthrough.length; o++) {
            var s = lookupKey(e, t.fallthrough[o], n, r);
            if (s) return s;
          }
        }
      }
      function isModifierKey(e) {
        var t = 'string' == typeof e ? e : Me[e.keyCode];
        return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
      }
      function addModifierNames(e, t, n) {
        var r = e;
        return (
          t.altKey && 'Alt' != r && (e = 'Alt-' + e),
          (w ? t.metaKey : t.ctrlKey) && 'Ctrl' != r && (e = 'Ctrl-' + e),
          (w ? t.ctrlKey : t.metaKey) && 'Cmd' != r && (e = 'Cmd-' + e),
          !n && t.shiftKey && 'Shift' != r && (e = 'Shift-' + e),
          e
        );
      }
      function keyName(e, t) {
        if (d && 34 == e.keyCode && e.char) return !1;
        var n = Me[e.keyCode];
        return null != n && !e.altGraphKey && addModifierNames(n, e, t);
      }
      function getKeyMap(e) {
        return 'string' == typeof e ? Ae[e] : e;
      }
      function deleteNearSelection(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
          for (var o = t(n[i]); r.length && cmp(o.from, lst(r).to) <= 0; ) {
            var s = r.pop();
            if (cmp(s.from, o.from) < 0) {
              o.from = s.from;
              break;
            }
          }
          r.push(o);
        }
        runInOp(e, function() {
          for (var t = r.length - 1; t >= 0; t--)
            replaceRange(e.doc, '', r[t].from, r[t].to, '+delete');
          ensureCursorVisible(e);
        });
      }
      function moveCharLogically(e, t, n) {
        var r = skipExtendingChars(e.text, t + n, n);
        return r < 0 || r > e.text.length ? null : r;
      }
      function moveLogically(e, t, n) {
        var r = moveCharLogically(e, t.ch, n);
        return null == r
          ? null
          : new Pos(t.line, r, n < 0 ? 'after' : 'before');
      }
      function endOfLine(e, t, n, r, i) {
        if (e) {
          var o = getOrder(n, t.doc.direction);
          if (o) {
            var s,
              a = i < 0 ? lst(o) : o[0],
              l = i < 0 == (1 == a.level) ? 'after' : 'before';
            if (a.level > 0 || 'rtl' == t.doc.direction) {
              var c = prepareMeasureForLine(t, n);
              s = i < 0 ? n.text.length - 1 : 0;
              var u = measureCharPrepared(t, c, s).top;
              (s = findFirst(
                function(e) {
                  return measureCharPrepared(t, c, e).top == u;
                },
                i < 0 == (1 == a.level) ? a.from : a.to - 1,
                s,
              )),
                'before' == l && (s = moveCharLogically(n, s, 1));
            } else s = i < 0 ? a.to : a.from;
            return new Pos(r, s, l);
          }
        }
        return new Pos(
          r,
          i < 0 ? n.text.length : 0,
          i < 0 ? 'before' : 'after',
        );
      }
      var Ne = {
        selectAll: selectAll,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), A);
        },
        killLine: function(e) {
          return deleteNearSelection(e, function(t) {
            if (t.empty()) {
              var n = getLine(e.doc, t.head.line).text.length;
              return t.head.ch == n && t.head.line < e.lastLine()
                ? { from: t.head, to: Pos(t.head.line + 1, 0) }
                : { from: t.head, to: Pos(t.head.line, n) };
            }
            return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function(e) {
          return deleteNearSelection(e, function(t) {
            return {
              from: Pos(t.from().line, 0),
              to: clipPos(e.doc, Pos(t.to().line + 1, 0)),
            };
          });
        },
        delLineLeft: function(e) {
          return deleteNearSelection(e, function(e) {
            return { from: Pos(e.from().line, 0), to: e.from() };
          });
        },
        delWrappedLineLeft: function(e) {
          return deleteNearSelection(e, function(t) {
            var n = e.charCoords(t.head, 'div').top + 5;
            return {
              from: e.coordsChar({ left: 0, top: n }, 'div'),
              to: t.from(),
            };
          });
        },
        delWrappedLineRight: function(e) {
          return deleteNearSelection(e, function(t) {
            var n = e.charCoords(t.head, 'div').top + 5,
              r = e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: n },
                'div',
              );
            return { from: t.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(Pos(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(Pos(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return lineStart(e, t.head.line);
            },
            { origin: '+move', bias: 1 },
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return lineStartSmart(e, t.head);
            },
            { origin: '+move', bias: 1 },
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return (function lineEnd(e, t) {
                var n = getLine(e.doc, t),
                  r = (function visualLineEnd(e) {
                    for (var t; (t = collapsedSpanAtEnd(e)); )
                      e = t.find(1, !0).line;
                    return e;
                  })(n);
                r != n && (t = lineNo(r));
                return endOfLine(!0, e, n, t, -1);
              })(e, t.head.line);
            },
            { origin: '+move', bias: -1 },
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, 'div').top + 5;
            return e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: n },
              'div',
            );
          }, D);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, 'div').top + 5;
            return e.coordsChar({ left: 0, top: n }, 'div');
          }, D);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, 'div').top + 5,
              r = e.coordsChar({ left: 0, top: n }, 'div');
            return r.ch < e.getLine(r.line).search(/\S/)
              ? lineStartSmart(e, t.head)
              : r;
          }, D);
        },
        goLineUp: function(e) {
          return e.moveV(-1, 'line');
        },
        goLineDown: function(e) {
          return e.moveV(1, 'line');
        },
        goPageUp: function(e) {
          return e.moveV(-1, 'page');
        },
        goPageDown: function(e) {
          return e.moveV(1, 'page');
        },
        goCharLeft: function(e) {
          return e.moveH(-1, 'char');
        },
        goCharRight: function(e) {
          return e.moveH(1, 'char');
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, 'column');
        },
        goColumnRight: function(e) {
          return e.moveH(1, 'column');
        },
        goWordLeft: function(e) {
          return e.moveH(-1, 'word');
        },
        goGroupRight: function(e) {
          return e.moveH(1, 'group');
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, 'group');
        },
        goWordRight: function(e) {
          return e.moveH(1, 'word');
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, 'char');
        },
        delCharAfter: function(e) {
          return e.deleteH(1, 'char');
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, 'word');
        },
        delWordAfter: function(e) {
          return e.deleteH(1, 'word');
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, 'group');
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, 'group');
        },
        indentAuto: function(e) {
          return e.indentSelection('smart');
        },
        indentMore: function(e) {
          return e.indentSelection('add');
        },
        indentLess: function(e) {
          return e.indentSelection('subtract');
        },
        insertTab: function(e) {
          return e.replaceSelection('\t');
        },
        insertSoftTab: function(e) {
          for (
            var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i].from(),
              s = countColumn(e.getLine(o.line), o.ch, r);
            t.push(spaceStr(r - s % r));
          }
          e.replaceSelections(t);
        },
        defaultTab: function(e) {
          e.somethingSelected()
            ? e.indentSelection('add')
            : e.execCommand('insertTab');
        },
        transposeChars: function(e) {
          return runInOp(e, function() {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var i = t[r].head,
                  o = getLine(e.doc, i.line).text;
                if (o)
                  if (
                    (i.ch == o.length && (i = new Pos(i.line, i.ch - 1)),
                    i.ch > 0)
                  )
                    (i = new Pos(i.line, i.ch + 1)),
                      e.replaceRange(
                        o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                        Pos(i.line, i.ch - 2),
                        i,
                        '+transpose',
                      );
                  else if (i.line > e.doc.first) {
                    var s = getLine(e.doc, i.line - 1).text;
                    s &&
                      ((i = new Pos(i.line, 1)),
                      e.replaceRange(
                        o.charAt(0) +
                          e.doc.lineSeparator() +
                          s.charAt(s.length - 1),
                        Pos(i.line - 1, s.length - 1),
                        i,
                        '+transpose',
                      ));
                  }
                n.push(new ve(i, i));
              }
            e.setSelections(n);
          });
        },
        newlineAndIndent: function(e) {
          return runInOp(e, function() {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
              e.replaceRange(
                e.doc.lineSeparator(),
                t[n].anchor,
                t[n].head,
                '+input',
              );
            t = e.listSelections();
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, !0);
            ensureCursorVisible(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection('\n', 'start');
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        },
      };
      function lineStart(e, t) {
        var n = getLine(e.doc, t),
          r = visualLine(n);
        return r != n && (t = lineNo(r)), endOfLine(!0, e, r, t, 1);
      }
      function lineStartSmart(e, t) {
        var n = lineStart(e, t.line),
          r = getLine(e.doc, n.line),
          i = getOrder(r, e.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(0, r.text.search(/\S/)),
            s = t.line == n.line && t.ch <= o && t.ch;
          return Pos(n.line, s ? 0 : o, n.sticky);
        }
        return n;
      }
      function doHandleBinding(e, t, n) {
        if ('string' == typeof t && !(t = Ne[t])) return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift,
          i = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            n && (e.display.shift = !1),
            (i = t(e) != P);
        } finally {
          (e.display.shift = r), (e.state.suppressEdits = !1);
        }
        return i;
      }
      var De = new T();
      function dispatchKey(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
          if (isModifierKey(t)) return 'handled';
          if (
            (/\'$/.test(t)
              ? (e.state.keySeq = null)
              : De.set(50, function() {
                  e.state.keySeq == i &&
                    ((e.state.keySeq = null), e.display.input.reset());
                }),
            dispatchKeyInner(e, i + ' ' + t, n, r))
          )
            return !0;
        }
        return dispatchKeyInner(e, t, n, r);
      }
      function dispatchKeyInner(e, t, n, r) {
        var i = (function lookupKeyForEditor(e, t, n) {
          for (var r = 0; r < e.state.keyMaps.length; r++) {
            var i = lookupKey(t, e.state.keyMaps[r], n, e);
            if (i) return i;
          }
          return (
            (e.options.extraKeys && lookupKey(t, e.options.extraKeys, n, e)) ||
            lookupKey(t, e.options.keyMap, n, e)
          );
        })(e, t, r);
        return (
          'multi' == i && (e.state.keySeq = t),
          'handled' == i && signalLater(e, 'keyHandled', e, t, n),
          ('handled' != i && 'multi' != i) ||
            (e_preventDefault(n), restartBlink(e)),
          !!i
        );
      }
      function handleKeyBinding(e, t) {
        var n = keyName(t, !0);
        return (
          !!n &&
          (t.shiftKey && !e.state.keySeq
            ? dispatchKey(e, 'Shift-' + n, t, function(t) {
                return doHandleBinding(e, t, !0);
              }) ||
              dispatchKey(e, n, t, function(t) {
                if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  return doHandleBinding(e, t);
              })
            : dispatchKey(e, n, t, function(t) {
                return doHandleBinding(e, t);
              }))
        );
      }
      var He = null;
      function onKeyDown(e) {
        if (((this.curOp.focus = activeElt()), !signalDOMEvent(this, e))) {
          s && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
          var t = e.keyCode;
          this.display.shift = 16 == t || e.shiftKey;
          var n = handleKeyBinding(this, e);
          d &&
            ((He = n ? t : null),
            !n &&
              88 == t &&
              !$ &&
              (y ? e.metaKey : e.ctrlKey) &&
              this.replaceSelection('', null, 'cut')),
            18 != t ||
              /\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className) ||
              (function showCrossHair(e) {
                var t = e.display.lineDiv;
                addClass(t, 'CodeMirror-crosshair');
                function up(e) {
                  (18 != e.keyCode && e.altKey) ||
                    (k(t, 'CodeMirror-crosshair'),
                    off(document, 'keyup', up),
                    off(document, 'mouseover', up));
                }
                V(document, 'keyup', up), V(document, 'mouseover', up);
              })(this);
        }
      }
      function onKeyUp(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), signalDOMEvent(this, e);
      }
      function onKeyPress(e) {
        if (
          !(
            eventInWidget(this.display, e) ||
            signalDOMEvent(this, e) ||
            (e.ctrlKey && !e.altKey) ||
            (y && e.metaKey)
          )
        ) {
          var t = e.keyCode,
            n = e.charCode;
          if (d && t == He) return (He = null), void e_preventDefault(e);
          if (
            !d ||
            (e.which && !(e.which < 10)) ||
            !handleKeyBinding(this, e)
          ) {
            var r = String.fromCharCode(null == n ? t : n);
            '\b' != r &&
              ((function handleCharBinding(e, t, n) {
                return dispatchKey(e, "'" + n + "'", t, function(t) {
                  return doHandleBinding(e, t, !0);
                });
              })(this, e, r) ||
                this.display.input.onKeyPress(e));
          }
        }
      }
      var We = function(e, t, n) {
        (this.time = e), (this.pos = t), (this.button = n);
      };
      We.prototype.compare = function(e, t, n) {
        return this.time + 400 > e && 0 == cmp(t, this.pos) && n == this.button;
      };
      var Ee, Ie;
      function onMouseDown(e) {
        var t = this.display;
        if (
          !(
            signalDOMEvent(this, e) ||
            (t.activeTouch && t.input.supportsTouch())
          )
        )
          if (
            (t.input.ensurePolled(),
            (t.shift = e.shiftKey),
            eventInWidget(t, e))
          )
            l ||
              ((t.scroller.draggable = !1),
              setTimeout(function() {
                return (t.scroller.draggable = !0);
              }, 100));
          else if (!clickInGutter(this, e)) {
            var n = posFromMouse(this, e),
              r = e_button(e),
              i = n
                ? (function clickRepeat(e, t) {
                    var n = +new Date();
                    return Ie && Ie.compare(n, e, t)
                      ? ((Ee = Ie = null), 'triple')
                      : Ee && Ee.compare(n, e, t)
                        ? ((Ie = new We(n, e, t)), (Ee = null), 'double')
                        : ((Ee = new We(n, e, t)), (Ie = null), 'single');
                  })(n, r)
                : 'single';
            window.focus(),
              1 == r && this.state.selectingText && this.state.selectingText(e),
              (n &&
                (function handleMappedButton(e, t, n, r, i) {
                  var o = 'Click';
                  'double' == r
                    ? (o = 'Double' + o)
                    : 'triple' == r && (o = 'Triple' + o);
                  return dispatchKey(
                    e,
                    addModifierNames(
                      (o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o),
                      i,
                    ),
                    i,
                    function(t) {
                      if (('string' == typeof t && (t = Ne[t]), !t)) return !1;
                      var r = !1;
                      try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                          (r = t(e, n) != P);
                      } finally {
                        e.state.suppressEdits = !1;
                      }
                      return r;
                    },
                  );
                })(this, r, n, i, e)) ||
                (1 == r
                  ? n
                    ? (function leftButtonDown(e, t, n, r) {
                        s
                          ? setTimeout(bind(ensureFocus, e), 0)
                          : (e.curOp.focus = activeElt());
                        var i,
                          o = (function configureMouse(e, t, n) {
                            var r = e.getOption('configureMouse'),
                              i = r ? r(e, t, n) : {};
                            if (null == i.unit) {
                              var o = b ? n.shiftKey && n.metaKey : n.altKey;
                              i.unit = o
                                ? 'rectangle'
                                : 'single' == t
                                  ? 'char'
                                  : 'double' == t ? 'word' : 'line';
                            }
                            (null == i.extend || e.doc.extend) &&
                              (i.extend = e.doc.extend || n.shiftKey);
                            null == i.addNew &&
                              (i.addNew = y ? n.metaKey : n.ctrlKey);
                            null == i.moveOnDrag &&
                              (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey));
                            return i;
                          })(e, n, r),
                          c = e.doc.sel;
                        e.options.dragDrop &&
                        j &&
                        !e.isReadOnly() &&
                        'single' == n &&
                        (i = c.contains(t)) > -1 &&
                        (cmp((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                        (cmp(i.to(), t) > 0 || t.xRel < 0)
                          ? (function leftButtonStartDrag(e, t, n, r) {
                              var i = e.display,
                                o = !1,
                                c = operation(e, function(t) {
                                  l && (i.scroller.draggable = !1),
                                    (e.state.draggingText = !1),
                                    off(document, 'mouseup', c),
                                    off(document, 'mousemove', u),
                                    off(i.scroller, 'dragstart', d),
                                    off(i.scroller, 'drop', c),
                                    o ||
                                      (e_preventDefault(t),
                                      r.addNew ||
                                        extendSelection(
                                          e.doc,
                                          n,
                                          null,
                                          null,
                                          r.extend,
                                        ),
                                      l || (s && 9 == a)
                                        ? setTimeout(function() {
                                            document.body.focus(),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                u = function(e) {
                                  o =
                                    o ||
                                    Math.abs(t.clientX - e.clientX) +
                                      Math.abs(t.clientY - e.clientY) >=
                                      10;
                                },
                                d = function() {
                                  return (o = !0);
                                };
                              l && (i.scroller.draggable = !0);
                              (e.state.draggingText = c),
                                (c.copy = !r.moveOnDrag),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                              V(document, 'mouseup', c),
                                V(document, 'mousemove', u),
                                V(i.scroller, 'dragstart', d),
                                V(i.scroller, 'drop', c),
                                delayBlurEvent(e),
                                setTimeout(function() {
                                  return i.input.focus();
                                }, 20);
                            })(e, r, t, o)
                          : (function leftButtonSelect(e, t, n, r) {
                              var i = e.display,
                                o = e.doc;
                              e_preventDefault(t);
                              var s,
                                a,
                                l = o.sel,
                                c = l.ranges;
                              r.addNew && !r.extend
                                ? ((a = o.sel.contains(n)),
                                  (s = a > -1 ? c[a] : new ve(n, n)))
                                : ((s = o.sel.primary()),
                                  (a = o.sel.primIndex));
                              if ('rectangle' == r.unit)
                                r.addNew || (s = new ve(n, n)),
                                  (n = posFromMouse(e, t, !0, !0)),
                                  (a = -1);
                              else {
                                var u = rangeForUnit(e, n, r.unit);
                                s = r.extend
                                  ? extendRange(s, u.anchor, u.head, r.extend)
                                  : u;
                              }
                              r.addNew
                                ? -1 == a
                                  ? ((a = c.length),
                                    setSelection(
                                      o,
                                      normalizeSelection(c.concat([s]), a),
                                      { scroll: !1, origin: '*mouse' },
                                    ))
                                  : c.length > 1 &&
                                    c[a].empty() &&
                                    'char' == r.unit &&
                                    !r.extend
                                    ? (setSelection(
                                        o,
                                        normalizeSelection(
                                          c.slice(0, a).concat(c.slice(a + 1)),
                                          0,
                                        ),
                                        { scroll: !1, origin: '*mouse' },
                                      ),
                                      (l = o.sel))
                                    : replaceOneSelection(o, a, s, N)
                                : ((a = 0),
                                  setSelection(o, new me([s], 0), N),
                                  (l = o.sel));
                              var d = n;
                              function extendTo(t) {
                                if (0 != cmp(d, t))
                                  if (((d = t), 'rectangle' == r.unit)) {
                                    for (
                                      var i = [],
                                        c = e.options.tabSize,
                                        u = countColumn(
                                          getLine(o, n.line).text,
                                          n.ch,
                                          c,
                                        ),
                                        p = countColumn(
                                          getLine(o, t.line).text,
                                          t.ch,
                                          c,
                                        ),
                                        h = Math.min(u, p),
                                        f = Math.max(u, p),
                                        g = Math.min(n.line, t.line),
                                        m = Math.min(
                                          e.lastLine(),
                                          Math.max(n.line, t.line),
                                        );
                                      g <= m;
                                      g++
                                    ) {
                                      var v = getLine(o, g).text,
                                        y = findColumn(v, h, c);
                                      h == f
                                        ? i.push(new ve(Pos(g, y), Pos(g, y)))
                                        : v.length > y &&
                                          i.push(
                                            new ve(
                                              Pos(g, y),
                                              Pos(g, findColumn(v, f, c)),
                                            ),
                                          );
                                    }
                                    i.length || i.push(new ve(n, n)),
                                      setSelection(
                                        o,
                                        normalizeSelection(
                                          l.ranges.slice(0, a).concat(i),
                                          a,
                                        ),
                                        { origin: '*mouse', scroll: !1 },
                                      ),
                                      e.scrollIntoView(t);
                                  } else {
                                    var b,
                                      C = s,
                                      x = rangeForUnit(e, t, r.unit),
                                      w = C.anchor;
                                    cmp(x.anchor, w) > 0
                                      ? ((b = x.head),
                                        (w = minPos(C.from(), x.anchor)))
                                      : ((b = x.anchor),
                                        (w = maxPos(C.to(), x.head)));
                                    var S = l.ranges.slice(0);
                                    (S[a] = (function bidiSimplify(e, t) {
                                      var n = t.anchor,
                                        r = t.head,
                                        i = getLine(e.doc, n.line);
                                      if (
                                        0 == cmp(n, r) &&
                                        n.sticky == r.sticky
                                      )
                                        return t;
                                      var o = getOrder(i);
                                      if (!o) return t;
                                      var s = getBidiPartAt(o, n.ch, n.sticky),
                                        a = o[s];
                                      if (a.from != n.ch && a.to != n.ch)
                                        return t;
                                      var l =
                                        s +
                                        ((a.from == n.ch) == (1 != a.level)
                                          ? 0
                                          : 1);
                                      if (0 == l || l == o.length) return t;
                                      var c;
                                      if (r.line != n.line)
                                        c =
                                          (r.line - n.line) *
                                            ('ltr' == e.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var u = getBidiPartAt(
                                            o,
                                            r.ch,
                                            r.sticky,
                                          ),
                                          d =
                                            u - s ||
                                            (r.ch - n.ch) *
                                              (1 == a.level ? -1 : 1);
                                        c =
                                          u == l - 1 || u == l ? d < 0 : d > 0;
                                      }
                                      var p = o[l + (c ? -1 : 0)],
                                        h = c == (1 == p.level),
                                        f = h ? p.from : p.to,
                                        g = h ? 'after' : 'before';
                                      return n.ch == f && n.sticky == g
                                        ? t
                                        : new ve(new Pos(n.line, f, g), r);
                                    })(e, new ve(clipPos(o, w), b))),
                                      setSelection(
                                        o,
                                        normalizeSelection(S, a),
                                        N,
                                      );
                                  }
                              }
                              var p = i.wrapper.getBoundingClientRect(),
                                h = 0;
                              function done(t) {
                                (e.state.selectingText = !1),
                                  (h = 1 / 0),
                                  e_preventDefault(t),
                                  i.input.focus(),
                                  off(document, 'mousemove', f),
                                  off(document, 'mouseup', g),
                                  (o.history.lastSelOrigin = null);
                              }
                              var f = operation(e, function(t) {
                                  e_button(t)
                                    ? (function extend(t) {
                                        var n = ++h;
                                        var s = posFromMouse(
                                          e,
                                          t,
                                          !0,
                                          'rectangle' == r.unit,
                                        );
                                        if (!s) return;
                                        if (0 != cmp(s, d)) {
                                          (e.curOp.focus = activeElt()),
                                            extendTo(s);
                                          var a = visibleLines(i, o);
                                          (s.line >= a.to || s.line < a.from) &&
                                            setTimeout(
                                              operation(e, function() {
                                                h == n && extend(t);
                                              }),
                                              150,
                                            );
                                        } else {
                                          var l =
                                            t.clientY < p.top
                                              ? -20
                                              : t.clientY > p.bottom ? 20 : 0;
                                          l &&
                                            setTimeout(
                                              operation(e, function() {
                                                h == n &&
                                                  ((i.scroller.scrollTop += l),
                                                  extend(t));
                                              }),
                                              50,
                                            );
                                        }
                                      })(t)
                                    : done(t);
                                }),
                                g = operation(e, done);
                              (e.state.selectingText = g),
                                V(document, 'mousemove', f),
                                V(document, 'mouseup', g);
                            })(e, r, t, o);
                      })(this, n, i, e)
                    : e_target(e) == t.scroller && e_preventDefault(e)
                  : 2 == r
                    ? (n && extendSelection(this.doc, n),
                      setTimeout(function() {
                        return t.input.focus();
                      }, 20))
                    : 3 == r &&
                      (S ? onContextMenu(this, e) : delayBlurEvent(this)));
          }
      }
      function rangeForUnit(e, t, n) {
        if ('char' == n) return new ve(t, t);
        if ('word' == n) return e.findWordAt(t);
        if ('line' == n)
          return new ve(Pos(t.line, 0), clipPos(e.doc, Pos(t.line + 1, 0)));
        var r = n(e, t);
        return new ve(r.from, r.to);
      }
      function gutterEvent(e, t, n, r) {
        var i, o;
        if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
        else
          try {
            (i = t.clientX), (o = t.clientY);
          } catch (t) {
            return !1;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && e_preventDefault(t);
        var s = e.display,
          a = s.lineDiv.getBoundingClientRect();
        if (o > a.bottom || !hasHandler(e, n)) return e_defaultPrevented(t);
        o -= a.top - s.viewOffset;
        for (var l = 0; l < e.options.gutters.length; ++l) {
          var c = s.gutters.childNodes[l];
          if (c && c.getBoundingClientRect().right >= i) {
            return (
              signal(e, n, e, lineAtHeight(e.doc, o), e.options.gutters[l], t),
              e_defaultPrevented(t)
            );
          }
        }
      }
      function clickInGutter(e, t) {
        return gutterEvent(e, t, 'gutterClick', !0);
      }
      function onContextMenu(e, t) {
        eventInWidget(e.display, t) ||
          (function contextMenuInGutter(e, t) {
            if (!hasHandler(e, 'gutterContextMenu')) return !1;
            return gutterEvent(e, t, 'gutterContextMenu', !1);
          })(e, t) ||
          signalDOMEvent(e, t, 'contextmenu') ||
          e.display.input.onContextMenu(t);
      }
      function themeChanged(e) {
        (e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          clearCaches(e);
      }
      var Fe = {
          toString: function() {
            return 'CodeMirror.Init';
          },
        },
        Be = {},
        ze = {};
      function guttersChanged(e) {
        updateGutters(e), regChange(e), alignHorizontally(e);
      }
      function dragDropChanged(e, t, n) {
        if (!t != !(n && n != Fe)) {
          var r = e.display.dragFunctions,
            i = t ? V : off;
          i(e.display.scroller, 'dragstart', r.start),
            i(e.display.scroller, 'dragenter', r.enter),
            i(e.display.scroller, 'dragover', r.over),
            i(e.display.scroller, 'dragleave', r.leave),
            i(e.display.scroller, 'drop', r.drop);
        }
      }
      function wrappingChanged(e) {
        e.options.lineWrapping
          ? (addClass(e.display.wrapper, 'CodeMirror-wrap'),
            (e.display.sizer.style.minWidth = ''),
            (e.display.sizerWidth = null))
          : (k(e.display.wrapper, 'CodeMirror-wrap'), findMaxLine(e)),
          estimateLineHeights(e),
          regChange(e),
          clearCaches(e),
          setTimeout(function() {
            return updateScrollbars(e);
          }, 100);
      }
      function CodeMirror$1(e, t) {
        var r = this;
        if (!(this instanceof CodeMirror$1)) return new CodeMirror$1(e, t);
        (this.options = t = t ? copyObj(t) : {}),
          copyObj(Be, t, !1),
          setGuttersForLineNumbers(t);
        var i = t.value;
        'string' == typeof i &&
          (i = new Se(i, t.mode, null, t.lineSeparator, t.direction)),
          (this.doc = i);
        var o = new CodeMirror$1.inputStyles[t.inputStyle](this),
          c = (this.display = new function Display(e, t, r) {
            (this.input = r),
              (this.scrollbarFiller = elt(
                'div',
                null,
                'CodeMirror-scrollbar-filler',
              )),
              this.scrollbarFiller.setAttribute('cm-not-content', 'true'),
              (this.gutterFiller = elt(
                'div',
                null,
                'CodeMirror-gutter-filler',
              )),
              this.gutterFiller.setAttribute('cm-not-content', 'true'),
              (this.lineDiv = eltP('div', null, 'CodeMirror-code')),
              (this.selectionDiv = elt(
                'div',
                null,
                null,
                'position: relative; z-index: 1',
              )),
              (this.cursorDiv = elt('div', null, 'CodeMirror-cursors')),
              (this.measure = elt('div', null, 'CodeMirror-measure')),
              (this.lineMeasure = elt('div', null, 'CodeMirror-measure')),
              (this.lineSpace = eltP(
                'div',
                [
                  this.measure,
                  this.lineMeasure,
                  this.selectionDiv,
                  this.cursorDiv,
                  this.lineDiv,
                ],
                null,
                'position: relative; outline: none',
              ));
            var i = eltP('div', [this.lineSpace], 'CodeMirror-lines');
            (this.mover = elt('div', [i], null, 'position: relative')),
              (this.sizer = elt('div', [this.mover], 'CodeMirror-sizer')),
              (this.sizerWidth = null),
              (this.heightForcer = elt(
                'div',
                null,
                null,
                'position: absolute; height: ' + O + 'px; width: 1px;',
              )),
              (this.gutters = elt('div', null, 'CodeMirror-gutters')),
              (this.lineGutter = null),
              (this.scroller = elt(
                'div',
                [this.sizer, this.heightForcer, this.gutters],
                'CodeMirror-scroll',
              )),
              this.scroller.setAttribute('tabIndex', '-1'),
              (this.wrapper = elt(
                'div',
                [this.scrollbarFiller, this.gutterFiller, this.scroller],
                'CodeMirror',
              )),
              s &&
                a < 8 &&
                ((this.gutters.style.zIndex = -1),
                (this.scroller.style.paddingRight = 0)),
              l || (n && v) || (this.scroller.draggable = !0),
              e &&
                (e.appendChild ? e.appendChild(this.wrapper) : e(this.wrapper)),
              (this.viewFrom = this.viewTo = t.first),
              (this.reportedViewFrom = this.reportedViewTo = t.first),
              (this.view = []),
              (this.renderedView = null),
              (this.externalMeasured = null),
              (this.viewOffset = 0),
              (this.lastWrapHeight = this.lastWrapWidth = 0),
              (this.updateLineNumbers = null),
              (this.nativeBarWidth = this.barHeight = this.barWidth = 0),
              (this.scrollbarsClipped = !1),
              (this.lineNumWidth = this.lineNumInnerWidth = this.lineNumChars = null),
              (this.alignWidgets = !1),
              (this.cachedCharWidth = this.cachedTextHeight = this.cachedPaddingH = null),
              (this.maxLine = null),
              (this.maxLineLength = 0),
              (this.maxLineChanged = !1),
              (this.wheelDX = this.wheelDY = this.wheelStartX = this.wheelStartY = null),
              (this.shift = !1),
              (this.selForContextMenu = null),
              (this.activeTouch = null),
              r.init(this);
          }(e, i, o));
        (c.wrapper.CodeMirror = this),
          updateGutters(this),
          themeChanged(this),
          t.lineWrapping &&
            (this.display.wrapper.className += ' CodeMirror-wrap'),
          initScrollbars(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new T(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !v && c.input.focus(),
          s &&
            a < 11 &&
            setTimeout(function() {
              return r.display.input.reset(!0);
            }, 20),
          (function registerEventHandlers(e) {
            var t = e.display;
            V(t.scroller, 'mousedown', operation(e, onMouseDown)),
              V(
                t.scroller,
                'dblclick',
                s && a < 11
                  ? operation(e, function(t) {
                      if (!signalDOMEvent(e, t)) {
                        var n = posFromMouse(e, t);
                        if (
                          n &&
                          !clickInGutter(e, t) &&
                          !eventInWidget(e.display, t)
                        ) {
                          e_preventDefault(t);
                          var r = e.findWordAt(n);
                          extendSelection(e.doc, r.anchor, r.head);
                        }
                      }
                    })
                  : function(t) {
                      return signalDOMEvent(e, t) || e_preventDefault(t);
                    },
              );
            S ||
              V(t.scroller, 'contextmenu', function(t) {
                return onContextMenu(e, t);
              });
            var n,
              r = { end: 0 };
            function finishTouch() {
              t.activeTouch &&
                ((n = setTimeout(function() {
                  return (t.activeTouch = null);
                }, 1e3)),
                ((r = t.activeTouch).end = +new Date()));
            }
            function farAway(e, t) {
              if (null == t.left) return !0;
              var n = t.left - e.left,
                r = t.top - e.top;
              return n * n + r * r > 400;
            }
            V(t.scroller, 'touchstart', function(i) {
              if (
                !signalDOMEvent(e, i) &&
                !(function isMouseLikeTouchEvent(e) {
                  if (1 != e.touches.length) return !1;
                  var t = e.touches[0];
                  return t.radiusX <= 1 && t.radiusY <= 1;
                })(i) &&
                !clickInGutter(e, i)
              ) {
                t.input.ensurePolled(), clearTimeout(n);
                var o = +new Date();
                (t.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - r.end <= 300 ? r : null,
                }),
                  1 == i.touches.length &&
                    ((t.activeTouch.left = i.touches[0].pageX),
                    (t.activeTouch.top = i.touches[0].pageY));
              }
            }),
              V(t.scroller, 'touchmove', function() {
                t.activeTouch && (t.activeTouch.moved = !0);
              }),
              V(t.scroller, 'touchend', function(n) {
                var r = t.activeTouch;
                if (
                  r &&
                  !eventInWidget(t, n) &&
                  null != r.left &&
                  !r.moved &&
                  new Date() - r.start < 300
                ) {
                  var i,
                    o = e.coordsChar(t.activeTouch, 'page');
                  (i =
                    !r.prev || farAway(r, r.prev)
                      ? new ve(o, o)
                      : !r.prev.prev || farAway(r, r.prev.prev)
                        ? e.findWordAt(o)
                        : new ve(
                            Pos(o.line, 0),
                            clipPos(e.doc, Pos(o.line + 1, 0)),
                          )),
                    e.setSelection(i.anchor, i.head),
                    e.focus(),
                    e_preventDefault(n);
                }
                finishTouch();
              }),
              V(t.scroller, 'touchcancel', finishTouch),
              V(t.scroller, 'scroll', function() {
                t.scroller.clientHeight &&
                  (updateScrollTop(e, t.scroller.scrollTop),
                  setScrollLeft(e, t.scroller.scrollLeft, !0),
                  signal(e, 'scroll', e));
              }),
              V(t.scroller, 'mousewheel', function(t) {
                return onScrollWheel(e, t);
              }),
              V(t.scroller, 'DOMMouseScroll', function(t) {
                return onScrollWheel(e, t);
              }),
              V(t.wrapper, 'scroll', function() {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
              }),
              (t.dragFunctions = {
                enter: function(t) {
                  signalDOMEvent(e, t) || e_stop(t);
                },
                over: function(t) {
                  signalDOMEvent(e, t) ||
                    (!(function onDragOver(e, t) {
                      var n = posFromMouse(e, t);
                      if (n) {
                        var r = document.createDocumentFragment();
                        drawSelectionCursor(e, n, r),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = elt(
                              'div',
                              null,
                              'CodeMirror-cursors CodeMirror-dragcursors',
                            )),
                            e.display.lineSpace.insertBefore(
                              e.display.dragCursor,
                              e.display.cursorDiv,
                            )),
                          removeChildrenAndAdd(e.display.dragCursor, r);
                      }
                    })(e, t),
                    e_stop(t));
                },
                start: function(t) {
                  return (function onDragStart(e, t) {
                    if (s && (!e.state.draggingText || +new Date() - ke < 100))
                      e_stop(t);
                    else if (
                      !signalDOMEvent(e, t) &&
                      !eventInWidget(e.display, t) &&
                      (t.dataTransfer.setData('Text', e.getSelection()),
                      (t.dataTransfer.effectAllowed = 'copyMove'),
                      t.dataTransfer.setDragImage && !p)
                    ) {
                      var n = elt(
                        'img',
                        null,
                        null,
                        'position: fixed; left: 0; top: 0;',
                      );
                      (n.src =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                        d &&
                          ((n.width = n.height = 1),
                          e.display.wrapper.appendChild(n),
                          (n._top = n.offsetTop)),
                        t.dataTransfer.setDragImage(n, 0, 0),
                        d && n.parentNode.removeChild(n);
                    }
                  })(e, t);
                },
                drop: operation(e, onDrop),
                leave: function(t) {
                  signalDOMEvent(e, t) || clearDragCursor(e);
                },
              });
            var i = t.input.getField();
            V(i, 'keyup', function(t) {
              return onKeyUp.call(e, t);
            }),
              V(i, 'keydown', operation(e, onKeyDown)),
              V(i, 'keypress', operation(e, onKeyPress)),
              V(i, 'focus', function(t) {
                return onFocus(e, t);
              }),
              V(i, 'blur', function(t) {
                return onBlur(e, t);
              });
          })(this),
          ensureGlobalHandlers(),
          startOperation(this),
          (this.curOp.forceUpdate = !0),
          attachDoc(this, i),
          (t.autofocus && !v) || this.hasFocus()
            ? setTimeout(bind(onFocus, this), 20)
            : onBlur(this);
        for (var u in ze) ze.hasOwnProperty(u) && ze[u](r, t[u], Fe);
        maybeUpdateLineNumberWidth(this), t.finishInit && t.finishInit(this);
        for (var h = 0; h < Re.length; ++h) Re[h](r);
        endOperation(this),
          l &&
            t.lineWrapping &&
            'optimizelegibility' == getComputedStyle(c.lineDiv).textRendering &&
            (c.lineDiv.style.textRendering = 'auto');
      }
      (CodeMirror$1.defaults = Be), (CodeMirror$1.optionHandlers = ze);
      var Re = [];
      CodeMirror$1.defineInitHook = function(e) {
        return Re.push(e);
      };
      function indentLine(e, t, n, r) {
        var i,
          o = e.doc;
        null == n && (n = 'add'),
          'smart' == n &&
            (o.mode.indent ? (i = getContextBefore(e, t).state) : (n = 'prev'));
        var s = e.options.tabSize,
          a = getLine(o, t),
          l = countColumn(a.text, null, s);
        a.stateAfter && (a.stateAfter = null);
        var c,
          u = a.text.match(/^\s*/)[0];
        if (r || /\S/.test(a.text)) {
          if (
            'smart' == n &&
            ((c = o.mode.indent(i, a.text.slice(u.length), a.text)) == P ||
              c > 150)
          ) {
            if (!r) return;
            n = 'prev';
          }
        } else (c = 0), (n = 'not');
        'prev' == n
          ? (c = t > o.first ? countColumn(getLine(o, t - 1).text, null, s) : 0)
          : 'add' == n
            ? (c = l + e.options.indentUnit)
            : 'subtract' == n
              ? (c = l - e.options.indentUnit)
              : 'number' == typeof n && (c = l + n),
          (c = Math.max(0, c));
        var d = '',
          p = 0;
        if (e.options.indentWithTabs)
          for (var h = Math.floor(c / s); h; --h) (p += s), (d += '\t');
        if ((p < c && (d += spaceStr(c - p)), d != u))
          return (
            replaceRange(o, d, Pos(t, 0), Pos(t, u.length), '+input'),
            (a.stateAfter = null),
            !0
          );
        for (var f = 0; f < o.sel.ranges.length; f++) {
          var g = o.sel.ranges[f];
          if (g.head.line == t && g.head.ch < u.length) {
            var m = Pos(t, u.length);
            replaceOneSelection(o, f, new ve(m, m));
            break;
          }
        }
      }
      var Ve = null;
      function setLastCopied(e) {
        Ve = e;
      }
      function applyTextInput(e, t, n, r, i) {
        var o = e.doc;
        (e.display.shift = !1), r || (r = o.sel);
        var s = e.state.pasteIncoming || 'paste' == i,
          a = K(t),
          l = null;
        if (s && r.ranges.length > 1)
          if (Ve && Ve.text.join('\n') == t) {
            if (r.ranges.length % Ve.text.length == 0) {
              l = [];
              for (var c = 0; c < Ve.text.length; c++)
                l.push(o.splitLines(Ve.text[c]));
            }
          } else
            a.length == r.ranges.length &&
              e.options.pasteLinesPerSelection &&
              (l = map(a, function(e) {
                return [e];
              }));
        for (var u, d = r.ranges.length - 1; d >= 0; d--) {
          var p = r.ranges[d],
            h = p.from(),
            f = p.to();
          p.empty() &&
            (n && n > 0
              ? (h = Pos(h.line, h.ch - n))
              : e.state.overwrite && !s
                ? (f = Pos(
                    f.line,
                    Math.min(
                      getLine(o, f.line).text.length,
                      f.ch + lst(a).length,
                    ),
                  ))
                : Ve &&
                  Ve.lineWise &&
                  Ve.text.join('\n') == t &&
                  (h = f = Pos(h.line, 0))),
            (u = e.curOp.updateInput);
          var g = {
            from: h,
            to: f,
            text: l ? l[d % l.length] : a,
            origin: i || (s ? 'paste' : e.state.cutIncoming ? 'cut' : '+input'),
          };
          makeChange(e.doc, g), signalLater(e, 'inputRead', e, g);
        }
        t && !s && triggerElectric(e, t),
          ensureCursorVisible(e),
          (e.curOp.updateInput = u),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = !1);
      }
      function handlePaste(e, t) {
        var n = e.clipboardData && e.clipboardData.getData('Text');
        if (n)
          return (
            e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              runInOp(t, function() {
                return applyTextInput(t, n, 0, null, 'paste');
              }),
            !0
          );
      }
      function triggerElectric(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];
            if (
              !(
                i.head.ch > 100 ||
                (r && n.ranges[r - 1].head.line == i.head.line)
              )
            ) {
              var o = e.getModeAt(i.head),
                s = !1;
              if (o.electricChars) {
                for (var a = 0; a < o.electricChars.length; a++)
                  if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                    s = indentLine(e, i.head.line, 'smart');
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    getLine(e.doc, i.head.line).text.slice(0, i.head.ch),
                  ) &&
                  (s = indentLine(e, i.head.line, 'smart'));
              s && signalLater(e, 'electricInput', e, i.head.line);
            }
          }
      }
      function copyableRanges(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var i = e.doc.sel.ranges[r].head.line,
            o = { anchor: Pos(i, 0), head: Pos(i + 1, 0) };
          n.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: n };
      }
      function disableBrowserMagic(e, t) {
        e.setAttribute('autocorrect', 'off'),
          e.setAttribute('autocapitalize', 'off'),
          e.setAttribute('spellcheck', !!t);
      }
      function hiddenTextarea() {
        var e = elt(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none',
          ),
          t = elt(
            'div',
            [e],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;',
          );
        return (
          l ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
          g && (e.style.border = '1px solid black'),
          disableBrowserMagic(e),
          t
        );
      }
      function findPosH(e, t, n, r, i) {
        var o = t,
          s = n,
          a = getLine(e, t.line);
        function moveOnce(r) {
          var o;
          if (
            null ==
            (o = i
              ? (function moveVisually(e, t, n, r) {
                  var i = getOrder(t, e.doc.direction);
                  if (!i) return moveLogically(t, n, r);
                  n.ch >= t.text.length
                    ? ((n.ch = t.text.length), (n.sticky = 'before'))
                    : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
                  var o = getBidiPartAt(i, n.ch, n.sticky),
                    s = i[o];
                  if (
                    'ltr' == e.doc.direction &&
                    s.level % 2 == 0 &&
                    (r > 0 ? s.to > n.ch : s.from < n.ch)
                  )
                    return moveLogically(t, n, r);
                  var a,
                    l = function(e, n) {
                      return moveCharLogically(
                        t,
                        e instanceof Pos ? e.ch : e,
                        n,
                      );
                    },
                    c = function(n) {
                      return e.options.lineWrapping
                        ? ((a = a || prepareMeasureForLine(e, t)),
                          wrappedLineExtentChar(e, t, a, n))
                        : { begin: 0, end: t.text.length };
                    },
                    u = c('before' == n.sticky ? l(n, -1) : n.ch);
                  if ('rtl' == e.doc.direction || 1 == s.level) {
                    var d = (1 == s.level) == r < 0,
                      p = l(n, d ? 1 : -1);
                    if (
                      null != p &&
                      (d
                        ? p <= s.to && p <= u.end
                        : p >= s.from && p >= u.begin)
                    ) {
                      var h = d ? 'before' : 'after';
                      return new Pos(n.line, p, h);
                    }
                  }
                  var f = function(e, t, r) {
                      for (
                        var o = function(e, t) {
                          return t
                            ? new Pos(n.line, l(e, 1), 'before')
                            : new Pos(n.line, e, 'after');
                        };
                        e >= 0 && e < i.length;
                        e += t
                      ) {
                        var s = i[e],
                          a = t > 0 == (1 != s.level),
                          c = a ? r.begin : l(r.end, -1);
                        if (s.from <= c && c < s.to) return o(c, a);
                        if (
                          ((c = a ? s.from : l(s.to, -1)),
                          r.begin <= c && c < r.end)
                        )
                          return o(c, a);
                      }
                    },
                    g = f(o + r, r, u);
                  if (g) return g;
                  var m = r > 0 ? u.end : l(u.begin, -1);
                  return null == m ||
                    (r > 0 && m == t.text.length) ||
                    !(g = f(r > 0 ? 0 : i.length - 1, r, c(m)))
                    ? null
                    : g;
                })(e.cm, a, t, n)
              : moveLogically(a, t, n))
          ) {
            if (
              r ||
              !(function findNextLine() {
                var r = t.line + n;
                return (
                  !(r < e.first || r >= e.first + e.size) &&
                  ((t = new Pos(r, t.ch, t.sticky)), (a = getLine(e, r)))
                );
              })()
            )
              return !1;
            t = endOfLine(i, e.cm, a, t.line, n);
          } else t = o;
          return !0;
        }
        if ('char' == r) moveOnce();
        else if ('column' == r) moveOnce(!0);
        else if ('word' == r || 'group' == r)
          for (
            var l = null,
              c = 'group' == r,
              u = e.cm && e.cm.getHelper(t, 'wordChars'),
              d = !0;
            !(n < 0) || moveOnce(!d);
            d = !1
          ) {
            var p = a.text.charAt(t.ch) || '\n',
              h = isWordChar(p, u)
                ? 'w'
                : c && '\n' == p ? 'n' : !c || /\s/.test(p) ? null : 'p';
            if ((!c || d || h || (h = 's'), l && l != h)) {
              n < 0 && ((n = 1), moveOnce(), (t.sticky = 'after'));
              break;
            }
            if ((h && (l = h), n > 0 && !moveOnce(!d))) break;
          }
        var f = skipAtomic(e, t, o, s, !0);
        return equalCursorPos(o, f) && (f.hitSide = !0), f;
      }
      function findPosV(e, t, n, r) {
        var i,
          o = e.doc,
          s = t.left;
        if ('page' == r) {
          var a = Math.min(
              e.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight,
            ),
            l = Math.max(a - 0.5 * textHeight(e.display), 3);
          i = (n > 0 ? t.bottom : t.top) + n * l;
        } else 'line' == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
        for (var c; (c = coordsChar(e, s, i)).outside; ) {
          if (n < 0 ? i <= 0 : i >= o.height) {
            c.hitSide = !0;
            break;
          }
          i += 5 * n;
        }
        return c;
      }
      var Ue = function(e) {
        (this.cm = e),
          (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
          (this.polling = new T()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null);
      };
      (Ue.prototype.init = function(e) {
        var t = this,
          n = this,
          r = n.cm,
          i = (n.div = e.lineDiv);
        disableBrowserMagic(i, r.options.spellcheck),
          V(i, 'paste', function(e) {
            signalDOMEvent(r, e) ||
              handlePaste(e, r) ||
              (a <= 11 &&
                setTimeout(
                  operation(r, function() {
                    return t.updateFromDOM();
                  }),
                  20,
                ));
          }),
          V(i, 'compositionstart', function(e) {
            t.composing = { data: e.data, done: !1 };
          }),
          V(i, 'compositionupdate', function(e) {
            t.composing || (t.composing = { data: e.data, done: !1 });
          }),
          V(i, 'compositionend', function(e) {
            t.composing &&
              (e.data != t.composing.data && t.readFromDOMSoon(),
              (t.composing.done = !0));
          }),
          V(i, 'touchstart', function() {
            return n.forceCompositionEnd();
          }),
          V(i, 'input', function() {
            t.composing || t.readFromDOMSoon();
          });
        function onCopyCut(e) {
          if (!signalDOMEvent(r, e)) {
            if (r.somethingSelected())
              setLastCopied({ lineWise: !1, text: r.getSelections() }),
                'cut' == e.type && r.replaceSelection('', null, 'cut');
            else {
              if (!r.options.lineWiseCopyCut) return;
              var t = copyableRanges(r);
              setLastCopied({ lineWise: !0, text: t.text }),
                'cut' == e.type &&
                  r.operation(function() {
                    r.setSelections(t.ranges, 0, A),
                      r.replaceSelection('', null, 'cut');
                  });
            }
            if (e.clipboardData) {
              e.clipboardData.clearData();
              var o = Ve.text.join('\n');
              if (
                (e.clipboardData.setData('Text', o),
                e.clipboardData.getData('Text') == o)
              )
                return void e.preventDefault();
            }
            var s = hiddenTextarea(),
              a = s.firstChild;
            r.display.lineSpace.insertBefore(s, r.display.lineSpace.firstChild),
              (a.value = Ve.text.join('\n'));
            var l = document.activeElement;
            M(a),
              setTimeout(function() {
                r.display.lineSpace.removeChild(s),
                  l.focus(),
                  l == i && n.showPrimarySelection();
              }, 50);
          }
        }
        V(i, 'copy', onCopyCut), V(i, 'cut', onCopyCut);
      }),
        (Ue.prototype.prepareSelection = function() {
          var e = prepareSelection(this.cm, !1);
          return (e.focus = this.cm.state.focused), e;
        }),
        (Ue.prototype.showSelection = function(e, t) {
          e &&
            this.cm.display.view.length &&
            ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e));
        }),
        (Ue.prototype.showPrimarySelection = function() {
          var e = window.getSelection(),
            t = this.cm,
            r = t.doc.sel.primary(),
            i = r.from(),
            o = r.to();
          if (
            t.display.viewTo == t.display.viewFrom ||
            i.line >= t.display.viewTo ||
            o.line < t.display.viewFrom
          )
            e.removeAllRanges();
          else {
            var s = domToPos(t, e.anchorNode, e.anchorOffset),
              a = domToPos(t, e.focusNode, e.focusOffset);
            if (
              !s ||
              s.bad ||
              !a ||
              a.bad ||
              0 != cmp(minPos(s, a), i) ||
              0 != cmp(maxPos(s, a), o)
            ) {
              var l = t.display.view,
                c = (i.line >= t.display.viewFrom && posToDOM(t, i)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = o.line < t.display.viewTo && posToDOM(t, o);
              if (!u) {
                var d = l[l.length - 1].measure,
                  p = d.maps ? d.maps[d.maps.length - 1] : d.map;
                u = {
                  node: p[p.length - 1],
                  offset: p[p.length - 2] - p[p.length - 3],
                };
              }
              if (c && u) {
                var h,
                  f = e.rangeCount && e.getRangeAt(0);
                try {
                  h = L(c.node, c.offset, u.offset, u.node);
                } catch (e) {}
                h &&
                  (!n && t.state.focused
                    ? (e.collapse(c.node, c.offset),
                      h.collapsed || (e.removeAllRanges(), e.addRange(h)))
                    : (e.removeAllRanges(), e.addRange(h)),
                  f && null == e.anchorNode
                    ? e.addRange(f)
                    : n && this.startGracePeriod()),
                  this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }),
        (Ue.prototype.startGracePeriod = function() {
          var e = this;
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function() {
              (e.gracePeriod = !1),
                e.selectionChanged() &&
                  e.cm.operation(function() {
                    return (e.cm.curOp.selectionChanged = !0);
                  });
            }, 20));
        }),
        (Ue.prototype.showMultipleSelections = function(e) {
          removeChildrenAndAdd(this.cm.display.cursorDiv, e.cursors),
            removeChildrenAndAdd(this.cm.display.selectionDiv, e.selection);
        }),
        (Ue.prototype.rememberSelection = function() {
          var e = window.getSelection();
          (this.lastAnchorNode = e.anchorNode),
            (this.lastAnchorOffset = e.anchorOffset),
            (this.lastFocusNode = e.focusNode),
            (this.lastFocusOffset = e.focusOffset);
        }),
        (Ue.prototype.selectionInEditor = function() {
          var e = window.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return contains(this.div, t);
        }),
        (Ue.prototype.focus = function() {
          'nocursor' != this.cm.options.readOnly &&
            (this.selectionInEditor() ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (Ue.prototype.blur = function() {
          this.div.blur();
        }),
        (Ue.prototype.getField = function() {
          return this.div;
        }),
        (Ue.prototype.supportsTouch = function() {
          return !0;
        }),
        (Ue.prototype.receivedFocus = function() {
          var e = this;
          this.selectionInEditor()
            ? this.pollSelection()
            : runInOp(this.cm, function() {
                return (e.cm.curOp.selectionChanged = !0);
              });
          this.polling.set(this.cm.options.pollInterval, function poll() {
            e.cm.state.focused &&
              (e.pollSelection(),
              e.polling.set(e.cm.options.pollInterval, poll));
          });
        }),
        (Ue.prototype.selectionChanged = function() {
          var e = window.getSelection();
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          );
        }),
        (Ue.prototype.pollSelection = function() {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var e = window.getSelection(),
              t = this.cm;
            if (
              m &&
              u &&
              this.cm.options.gutters.length &&
              (function isInGutter(e) {
                for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                return !1;
              })(e.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: 'keydown',
                  keyCode: 8,
                  preventDefault: Math.abs,
                }),
                this.blur(),
                void this.focus()
              );
            if (!this.composing) {
              this.rememberSelection();
              var n = domToPos(t, e.anchorNode, e.anchorOffset),
                r = domToPos(t, e.focusNode, e.focusOffset);
              n &&
                r &&
                runInOp(t, function() {
                  setSelection(t.doc, simpleSelection(n, r), A),
                    (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Ue.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var e = this.cm,
            t = e.display,
            n = e.doc.sel.primary(),
            r = n.from(),
            i = n.to();
          if (
            (0 == r.ch &&
              r.line > e.firstLine() &&
              (r = Pos(r.line - 1, getLine(e.doc, r.line - 1).length)),
            i.ch == getLine(e.doc, i.line).text.length &&
              i.line < e.lastLine() &&
              (i = Pos(i.line + 1, 0)),
            r.line < t.viewFrom || i.line > t.viewTo - 1)
          )
            return !1;
          var o, s, a;
          r.line == t.viewFrom || 0 == (o = findViewIndex(e, r.line))
            ? ((s = lineNo(t.view[0].line)), (a = t.view[0].node))
            : ((s = lineNo(t.view[o].line)),
              (a = t.view[o - 1].node.nextSibling));
          var l,
            c,
            u = findViewIndex(e, i.line);
          if (
            (u == t.view.length - 1
              ? ((l = t.viewTo - 1), (c = t.lineDiv.lastChild))
              : ((l = lineNo(t.view[u + 1].line) - 1),
                (c = t.view[u + 1].node.previousSibling)),
            !a)
          )
            return !1;
          for (
            var d = e.doc.splitLines(
                (function domTextBetween(e, t, n, r, i) {
                  var o = '',
                    s = !1,
                    a = e.doc.lineSeparator();
                  function close() {
                    s && ((o += a), (s = !1));
                  }
                  function addText(e) {
                    e && (close(), (o += e));
                  }
                  function walk(t) {
                    if (1 == t.nodeType) {
                      var n = t.getAttribute('cm-text');
                      if (null != n)
                        return void addText(
                          n || t.textContent.replace(/\u200b/g, ''),
                        );
                      var o,
                        l = t.getAttribute('cm-marker');
                      if (l) {
                        var c = e.findMarks(
                          Pos(r, 0),
                          Pos(i + 1, 0),
                          (function recognizeMarker(e) {
                            return function(t) {
                              return t.id == e;
                            };
                          })(+l),
                        );
                        return void (
                          c.length &&
                          (o = c[0].find(0)) &&
                          addText(getBetween(e.doc, o.from, o.to).join(a))
                        );
                      }
                      if ('false' == t.getAttribute('contenteditable')) return;
                      var u = /^(pre|div|p)$/i.test(t.nodeName);
                      u && close();
                      for (var d = 0; d < t.childNodes.length; d++)
                        walk(t.childNodes[d]);
                      u && (s = !0);
                    } else 3 == t.nodeType && addText(t.nodeValue);
                  }
                  for (; walk(t), t != n; ) t = t.nextSibling;
                  return o;
                })(e, a, c, s, l),
              ),
              p = getBetween(
                e.doc,
                Pos(s, 0),
                Pos(l, getLine(e.doc, l).text.length),
              );
            d.length > 1 && p.length > 1;

          )
            if (lst(d) == lst(p)) d.pop(), p.pop(), l--;
            else {
              if (d[0] != p[0]) break;
              d.shift(), p.shift(), s++;
            }
          for (
            var h = 0,
              f = 0,
              g = d[0],
              m = p[0],
              v = Math.min(g.length, m.length);
            h < v && g.charCodeAt(h) == m.charCodeAt(h);

          )
            ++h;
          for (
            var y = lst(d),
              b = lst(p),
              C = Math.min(
                y.length - (1 == d.length ? h : 0),
                b.length - (1 == p.length ? h : 0),
              );
            f < C &&
            y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);

          )
            ++f;
          if (1 == d.length && 1 == p.length && s == r.line)
            for (
              ;
              h &&
              h > r.ch &&
              y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);

            )
              h--, f++;
          (d[d.length - 1] = y.slice(0, y.length - f).replace(/^\u200b+/, '')),
            (d[0] = d[0].slice(h).replace(/\u200b+$/, ''));
          var x = Pos(s, h),
            w = Pos(l, p.length ? lst(p).length - f : 0);
          return d.length > 1 || d[0] || cmp(x, w)
            ? (replaceRange(e.doc, d, x, w, '+input'), !0)
            : void 0;
        }),
        (Ue.prototype.ensurePolled = function() {
          this.forceCompositionEnd();
        }),
        (Ue.prototype.reset = function() {
          this.forceCompositionEnd();
        }),
        (Ue.prototype.forceCompositionEnd = function() {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (Ue.prototype.readFromDOMSoon = function() {
          var e = this;
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function() {
              if (((e.readDOMTimeout = null), e.composing)) {
                if (!e.composing.done) return;
                e.composing = null;
              }
              e.updateFromDOM();
            }, 80));
        }),
        (Ue.prototype.updateFromDOM = function() {
          var e = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            runInOp(this.cm, function() {
              return regChange(e.cm);
            });
        }),
        (Ue.prototype.setUneditable = function(e) {
          e.contentEditable = 'false';
        }),
        (Ue.prototype.onKeyPress = function(e) {
          0 != e.charCode &&
            (e.preventDefault(),
            this.cm.isReadOnly() ||
              operation(this.cm, applyTextInput)(
                this.cm,
                String.fromCharCode(
                  null == e.charCode ? e.keyCode : e.charCode,
                ),
                0,
              ));
        }),
        (Ue.prototype.readOnlyChanged = function(e) {
          this.div.contentEditable = String('nocursor' != e);
        }),
        (Ue.prototype.onContextMenu = function() {}),
        (Ue.prototype.resetPosition = function() {}),
        (Ue.prototype.needsContentAttribute = !0);
      function posToDOM(e, t) {
        var n = findViewForLine(e, t.line);
        if (!n || n.hidden) return null;
        var r = getLine(e.doc, t.line),
          i = mapFromLineView(n, r, t.line),
          o = getOrder(r, e.doc.direction),
          s = 'left';
        if (o) {
          s = getBidiPartAt(o, t.ch) % 2 ? 'right' : 'left';
        }
        var a = nodeAndOffsetInLineMap(i.map, t.ch, s);
        return (a.offset = 'right' == a.collapse ? a.end : a.start), a;
      }
      function badPos(e, t) {
        return t && (e.bad = !0), e;
      }
      function domToPos(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
          if (!(r = e.display.lineDiv.childNodes[n]))
            return badPos(e.clipPos(Pos(e.display.viewTo - 1)), !0);
          (t = null), (n = 0);
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv) return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv) break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var o = e.display.view[i];
          if (o.node == r) return locateNodeInLineView(o, t, n);
        }
      }
      function locateNodeInLineView(e, t, n) {
        var r = e.text.firstChild,
          i = !1;
        if (!t || !contains(r, t)) return badPos(Pos(lineNo(e.line), 0), !0);
        if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
          var o = e.rest ? lst(e.rest) : e.line;
          return badPos(Pos(lineNo(o), o.text.length), i);
        }
        var s = 3 == t.nodeType ? t : null,
          a = t;
        for (
          s ||
          1 != t.childNodes.length ||
          3 != t.firstChild.nodeType ||
          ((s = t.firstChild), n && (n = s.nodeValue.length));
          a.parentNode != r;

        )
          a = a.parentNode;
        var l = e.measure,
          c = l.maps;
        function find(t, n, r) {
          for (var i = -1; i < (c ? c.length : 0); i++)
            for (var o = i < 0 ? l.map : c[i], s = 0; s < o.length; s += 3) {
              var a = o[s + 2];
              if (a == t || a == n) {
                var u = lineNo(i < 0 ? e.line : e.rest[i]),
                  d = o[s] + r;
                return (r < 0 || a != t) && (d = o[s + (r ? 1 : 0)]), Pos(u, d);
              }
            }
        }
        var u = find(s, a, n);
        if (u) return badPos(u, i);
        for (
          var d = a.nextSibling, p = s ? s.nodeValue.length - n : 0;
          d;
          d = d.nextSibling
        ) {
          if ((u = find(d, d.firstChild, 0)))
            return badPos(Pos(u.line, u.ch - p), i);
          p += d.textContent.length;
        }
        for (var h = a.previousSibling, f = n; h; h = h.previousSibling) {
          if ((u = find(h, h.firstChild, -1)))
            return badPos(Pos(u.line, u.ch + f), i);
          f += h.textContent.length;
        }
      }
      var je = function(e) {
        (this.cm = e),
          (this.prevInput = ''),
          (this.pollingFast = !1),
          (this.polling = new T()),
          (this.hasSelection = !1),
          (this.composing = null);
      };
      (je.prototype.init = function(e) {
        var t = this,
          n = this,
          r = this.cm,
          i = (this.wrapper = hiddenTextarea()),
          o = (this.textarea = i.firstChild);
        e.wrapper.insertBefore(i, e.wrapper.firstChild),
          g && (o.style.width = '0px'),
          V(o, 'input', function() {
            s && a >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
          }),
          V(o, 'paste', function(e) {
            signalDOMEvent(r, e) ||
              handlePaste(e, r) ||
              ((r.state.pasteIncoming = !0), n.fastPoll());
          });
        function prepareCopyCut(e) {
          if (!signalDOMEvent(r, e)) {
            if (r.somethingSelected())
              setLastCopied({ lineWise: !1, text: r.getSelections() });
            else {
              if (!r.options.lineWiseCopyCut) return;
              var t = copyableRanges(r);
              setLastCopied({ lineWise: !0, text: t.text }),
                'cut' == e.type
                  ? r.setSelections(t.ranges, null, A)
                  : ((n.prevInput = ''), (o.value = t.text.join('\n')), M(o));
            }
            'cut' == e.type && (r.state.cutIncoming = !0);
          }
        }
        V(o, 'cut', prepareCopyCut),
          V(o, 'copy', prepareCopyCut),
          V(e.scroller, 'paste', function(t) {
            eventInWidget(e, t) ||
              signalDOMEvent(r, t) ||
              ((r.state.pasteIncoming = !0), n.focus());
          }),
          V(e.lineSpace, 'selectstart', function(t) {
            eventInWidget(e, t) || e_preventDefault(t);
          }),
          V(o, 'compositionstart', function() {
            var e = r.getCursor('from');
            n.composing && n.composing.range.clear(),
              (n.composing = {
                start: e,
                range: r.markText(e, r.getCursor('to'), {
                  className: 'CodeMirror-composing',
                }),
              });
          }),
          V(o, 'compositionend', function() {
            n.composing &&
              (n.poll(), n.composing.range.clear(), (n.composing = null));
          });
      }),
        (je.prototype.prepareSelection = function() {
          var e = this.cm,
            t = e.display,
            n = e.doc,
            r = prepareSelection(e);
          if (e.options.moveInputWithCursor) {
            var i = cursorCoords(e, n.sel.primary().head, 'div'),
              o = t.wrapper.getBoundingClientRect(),
              s = t.lineDiv.getBoundingClientRect();
            (r.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, i.top + s.top - o.top),
            )),
              (r.teLeft = Math.max(
                0,
                Math.min(t.wrapper.clientWidth - 10, i.left + s.left - o.left),
              ));
          }
          return r;
        }),
        (je.prototype.showSelection = function(e) {
          var t = this.cm.display;
          removeChildrenAndAdd(t.cursorDiv, e.cursors),
            removeChildrenAndAdd(t.selectionDiv, e.selection),
            null != e.teTop &&
              ((this.wrapper.style.top = e.teTop + 'px'),
              (this.wrapper.style.left = e.teLeft + 'px'));
        }),
        (je.prototype.reset = function(e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;
            if (t.somethingSelected()) {
              this.prevInput = '';
              var n = t.getSelection();
              (this.textarea.value = n),
                t.state.focused && M(this.textarea),
                s && a >= 9 && (this.hasSelection = n);
            } else
              e ||
                ((this.prevInput = this.textarea.value = ''),
                s && a >= 9 && (this.hasSelection = null));
          }
        }),
        (je.prototype.getField = function() {
          return this.textarea;
        }),
        (je.prototype.supportsTouch = function() {
          return !1;
        }),
        (je.prototype.focus = function() {
          if (
            'nocursor' != this.cm.options.readOnly &&
            (!v || activeElt() != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (e) {}
        }),
        (je.prototype.blur = function() {
          this.textarea.blur();
        }),
        (je.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (je.prototype.receivedFocus = function() {
          this.slowPoll();
        }),
        (je.prototype.slowPoll = function() {
          var e = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function() {
              e.poll(), e.cm.state.focused && e.slowPoll();
            });
        }),
        (je.prototype.fastPoll = function() {
          var e = !1,
            t = this;
          t.pollingFast = !0;
          t.polling.set(20, function p() {
            t.poll() || e
              ? ((t.pollingFast = !1), t.slowPoll())
              : ((e = !0), t.polling.set(60, p));
          });
        }),
        (je.prototype.poll = function() {
          var e = this,
            t = this.cm,
            n = this.textarea,
            r = this.prevInput;
          if (
            this.contextMenuPending ||
            !t.state.focused ||
            (_(n) && !r && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          )
            return !1;
          var i = n.value;
          if (i == r && !t.somethingSelected()) return !1;
          if (
            (s && a >= 9 && this.hasSelection === i) ||
            (y && /[\uf700-\uf7ff]/.test(i))
          )
            return t.display.input.reset(), !1;
          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || r || (r = '​'), 8666 == o))
              return this.reset(), this.cm.execCommand('undo');
          }
          for (
            var l = 0, c = Math.min(r.length, i.length);
            l < c && r.charCodeAt(l) == i.charCodeAt(l);

          )
            ++l;
          return (
            runInOp(t, function() {
              applyTextInput(
                t,
                i.slice(l),
                r.length - l,
                null,
                e.composing ? '*compose' : null,
              ),
                i.length > 1e3 || i.indexOf('\n') > -1
                  ? (n.value = e.prevInput = '')
                  : (e.prevInput = i),
                e.composing &&
                  (e.composing.range.clear(),
                  (e.composing.range = t.markText(
                    e.composing.start,
                    t.getCursor('to'),
                    { className: 'CodeMirror-composing' },
                  )));
            }),
            !0
          );
        }),
        (je.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (je.prototype.onKeyPress = function() {
          s && a >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (je.prototype.onContextMenu = function(e) {
          var t = this,
            n = t.cm,
            r = n.display,
            i = t.textarea,
            o = posFromMouse(n, e),
            c = r.scroller.scrollTop;
          if (o && !d) {
            n.options.resetSelectionOnContextMenu &&
              -1 == n.doc.sel.contains(o) &&
              operation(n, setSelection)(n.doc, simpleSelection(o), A);
            var u = i.style.cssText,
              p = t.wrapper.style.cssText;
            t.wrapper.style.cssText = 'position: absolute';
            var h = t.wrapper.getBoundingClientRect();
            i.style.cssText =
              'position: absolute; width: 30px; height: 30px;\n      top: ' +
              (e.clientY - h.top - 5) +
              'px; left: ' +
              (e.clientX - h.left - 5) +
              'px;\n      z-index: 1000; background: ' +
              (s ? 'rgba(255, 255, 255, .05)' : 'transparent') +
              ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);';
            var f;
            if (
              (l && (f = window.scrollY),
              r.input.focus(),
              l && window.scrollTo(null, f),
              r.input.reset(),
              n.somethingSelected() || (i.value = t.prevInput = ' '),
              (t.contextMenuPending = !0),
              (r.selForContextMenu = n.doc.sel),
              clearTimeout(r.detectingSelectAll),
              s && a >= 9 && prepareSelectAllHack(),
              S)
            ) {
              e_stop(e);
              var g = function() {
                off(window, 'mouseup', g), setTimeout(rehide, 20);
              };
              V(window, 'mouseup', g);
            } else setTimeout(rehide, 50);
          }
          function prepareSelectAllHack() {
            if (null != i.selectionStart) {
              var e = n.somethingSelected(),
                o = '​' + (e ? i.value : '');
              (i.value = '⇚'),
                (i.value = o),
                (t.prevInput = e ? '' : '​'),
                (i.selectionStart = 1),
                (i.selectionEnd = o.length),
                (r.selForContextMenu = n.doc.sel);
            }
          }
          function rehide() {
            if (
              ((t.contextMenuPending = !1),
              (t.wrapper.style.cssText = p),
              (i.style.cssText = u),
              s &&
                a < 9 &&
                r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
              null != i.selectionStart)
            ) {
              (!s || (s && a < 9)) && prepareSelectAllHack();
              var e = 0,
                o = function() {
                  r.selForContextMenu == n.doc.sel &&
                  0 == i.selectionStart &&
                  i.selectionEnd > 0 &&
                  '​' == t.prevInput
                    ? operation(n, selectAll)(n)
                    : e++ < 10
                      ? (r.detectingSelectAll = setTimeout(o, 500))
                      : ((r.selForContextMenu = null), r.input.reset());
                };
              r.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }),
        (je.prototype.readOnlyChanged = function(e) {
          e || this.reset(), (this.textarea.disabled = 'nocursor' == e);
        }),
        (je.prototype.setUneditable = function() {}),
        (je.prototype.needsContentAttribute = !1);
      !(function defineOptions(e) {
        var t = e.optionHandlers;
        function option(n, r, i, o) {
          (e.defaults[n] = r),
            i &&
              (t[n] = o
                ? function(e, t, n) {
                    n != Fe && i(e, t, n);
                  }
                : i);
        }
        (e.defineOption = option),
          (e.Init = Fe),
          option(
            'value',
            '',
            function(e, t) {
              return e.setValue(t);
            },
            !0,
          ),
          option(
            'mode',
            null,
            function(e, t) {
              (e.doc.modeOption = t), loadMode(e);
            },
            !0,
          ),
          option('indentUnit', 2, loadMode, !0),
          option('indentWithTabs', !1),
          option('smartIndent', !0),
          option(
            'tabSize',
            4,
            function(e) {
              resetModeState(e), clearCaches(e), regChange(e);
            },
            !0,
          ),
          option('lineSeparator', null, function(e, t) {
            if (((e.doc.lineSep = t), t)) {
              var n = [],
                r = e.doc.first;
              e.doc.iter(function(e) {
                for (var i = 0; ; ) {
                  var o = e.text.indexOf(t, i);
                  if (-1 == o) break;
                  (i = o + t.length), n.push(Pos(r, o));
                }
                r++;
              });
              for (var i = n.length - 1; i >= 0; i--)
                replaceRange(
                  e.doc,
                  t,
                  n[i],
                  Pos(n[i].line, n[i].ch + t.length),
                );
            }
          }),
          option(
            'specialChars',
            /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
            function(e, t, n) {
              (e.state.specialChars = new RegExp(
                t.source + (t.test('\t') ? '' : '|\t'),
                'g',
              )),
                n != Fe && e.refresh();
            },
          ),
          option(
            'specialCharPlaceholder',
            defaultSpecialCharPlaceholder,
            function(e) {
              return e.refresh();
            },
            !0,
          ),
          option('electricChars', !0),
          option(
            'inputStyle',
            v ? 'contenteditable' : 'textarea',
            function() {
              throw new Error(
                'inputStyle can not (yet) be changed in a running editor',
              );
            },
            !0,
          ),
          option(
            'spellcheck',
            !1,
            function(e, t) {
              return (e.getInputField().spellcheck = t);
            },
            !0,
          ),
          option('rtlMoveVisually', !C),
          option('wholeLineUpdateBefore', !0),
          option(
            'theme',
            'default',
            function(e) {
              themeChanged(e), guttersChanged(e);
            },
            !0,
          ),
          option('keyMap', 'default', function(e, t, n) {
            var r = getKeyMap(t),
              i = n != Fe && getKeyMap(n);
            i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
          }),
          option('extraKeys', null),
          option('configureMouse', null),
          option('lineWrapping', !1, wrappingChanged, !0),
          option(
            'gutters',
            [],
            function(e) {
              setGuttersForLineNumbers(e.options), guttersChanged(e);
            },
            !0,
          ),
          option(
            'fixedGutter',
            !0,
            function(e, t) {
              (e.display.gutters.style.left = t
                ? compensateForHScroll(e.display) + 'px'
                : '0'),
                e.refresh();
            },
            !0,
          ),
          option(
            'coverGutterNextToScrollbar',
            !1,
            function(e) {
              return updateScrollbars(e);
            },
            !0,
          ),
          option(
            'scrollbarStyle',
            'native',
            function(e) {
              initScrollbars(e),
                updateScrollbars(e),
                e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
            },
            !0,
          ),
          option(
            'lineNumbers',
            !1,
            function(e) {
              setGuttersForLineNumbers(e.options), guttersChanged(e);
            },
            !0,
          ),
          option('firstLineNumber', 1, guttersChanged, !0),
          option(
            'lineNumberFormatter',
            function(e) {
              return e;
            },
            guttersChanged,
            !0,
          ),
          option('showCursorWhenSelecting', !1, updateSelection, !0),
          option('resetSelectionOnContextMenu', !0),
          option('lineWiseCopyCut', !0),
          option('pasteLinesPerSelection', !0),
          option('readOnly', !1, function(e, t) {
            'nocursor' == t && (onBlur(e), e.display.input.blur()),
              e.display.input.readOnlyChanged(t);
          }),
          option(
            'disableInput',
            !1,
            function(e, t) {
              t || e.display.input.reset();
            },
            !0,
          ),
          option('dragDrop', !0, dragDropChanged),
          option('allowDropFileTypes', null),
          option('cursorBlinkRate', 530),
          option('cursorScrollMargin', 0),
          option('cursorHeight', 1, updateSelection, !0),
          option('singleCursorHeightPerLine', !0, updateSelection, !0),
          option('workTime', 100),
          option('workDelay', 100),
          option('flattenSpans', !0, resetModeState, !0),
          option('addModeClass', !1, resetModeState, !0),
          option('pollInterval', 100),
          option('undoDepth', 200, function(e, t) {
            return (e.doc.history.undoDepth = t);
          }),
          option('historyEventDelay', 1250),
          option(
            'viewportMargin',
            10,
            function(e) {
              return e.refresh();
            },
            !0,
          ),
          option('maxHighlightLength', 1e4, resetModeState, !0),
          option('moveInputWithCursor', !0, function(e, t) {
            t || e.display.input.resetPosition();
          }),
          option('tabindex', null, function(e, t) {
            return (e.display.input.getField().tabIndex = t || '');
          }),
          option('autofocus', null),
          option(
            'direction',
            'ltr',
            function(e, t) {
              return e.doc.setDirection(t);
            },
            !0,
          );
      })(CodeMirror$1),
        (function(e) {
          var t = e.optionHandlers,
            n = (e.helpers = {});
          (e.prototype = {
            constructor: e,
            focus: function() {
              window.focus(), this.display.input.focus();
            },
            setOption: function(e, n) {
              var r = this.options,
                i = r[e];
              (r[e] == n && 'mode' != e) ||
                ((r[e] = n),
                t.hasOwnProperty(e) && operation(this, t[e])(this, n, i),
                signal(this, 'optionChange', this, e));
            },
            getOption: function(e) {
              return this.options[e];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(e, t) {
              this.state.keyMaps[t ? 'push' : 'unshift'](getKeyMap(e));
            },
            removeKeyMap: function(e) {
              for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
            },
            addOverlay: methodOp(function(t, n) {
              var r = t.token ? t : e.getMode(this.options, t);
              if (r.startState)
                throw new Error('Overlays may not be stateful.');
              !(function insertSorted(e, t, n) {
                for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                e.splice(r, 0, t);
              })(
                this.state.overlays,
                {
                  mode: r,
                  modeSpec: t,
                  opaque: n && n.opaque,
                  priority: (n && n.priority) || 0,
                },
                function(e) {
                  return e.priority;
                },
              ),
                this.state.modeGen++,
                regChange(this);
            }),
            removeOverlay: methodOp(function(e) {
              for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || ('string' == typeof e && r.name == e))
                  return (
                    t.splice(n, 1), this.state.modeGen++, void regChange(this)
                  );
              }
            }),
            indentLine: methodOp(function(e, t, n) {
              'string' != typeof t &&
                'number' != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent ? 'smart' : 'prev'
                    : t ? 'add' : 'subtract'),
                isLine(this.doc, e) && indentLine(this, e, t, n);
            }),
            indentSelection: methodOp(function(e) {
              for (
                var t = this.doc.sel.ranges, n = -1, r = 0;
                r < t.length;
                r++
              ) {
                var i = t[r];
                if (i.empty())
                  i.head.line > n &&
                    (indentLine(this, i.head.line, e, !0),
                    (n = i.head.line),
                    r == this.doc.sel.primIndex && ensureCursorVisible(this));
                else {
                  var o = i.from(),
                    s = i.to(),
                    a = Math.max(n, o.line);
                  n = Math.min(this.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                  for (var l = a; l < n; ++l) indentLine(this, l, e);
                  var c = this.doc.sel.ranges;
                  0 == o.ch &&
                    t.length == c.length &&
                    c[r].from().ch > 0 &&
                    replaceOneSelection(this.doc, r, new ve(o, c[r].to()), A);
                }
              }
            }),
            getTokenAt: function(e, t) {
              return takeToken(this, e, t);
            },
            getLineTokens: function(e, t) {
              return takeToken(this, Pos(e), t, !0);
            },
            getTokenTypeAt: function(e) {
              e = clipPos(this.doc, e);
              var t,
                n = getLineStyles(this, getLine(this.doc, e.line)),
                r = 0,
                i = (n.length - 1) / 2,
                o = e.ch;
              if (0 == o) t = n[2];
              else
                for (;;) {
                  var s = (r + i) >> 1;
                  if ((s ? n[2 * s - 1] : 0) >= o) i = s;
                  else {
                    if (!(n[2 * s + 1] < o)) {
                      t = n[2 * s + 2];
                      break;
                    }
                    r = s + 1;
                  }
                }
              var a = t ? t.indexOf('overlay ') : -1;
              return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1);
            },
            getModeAt: function(t) {
              var n = this.doc.mode;
              return n.innerMode
                ? e.innerMode(n, this.getTokenAt(t).state).mode
                : n;
            },
            getHelper: function(e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function(e, t) {
              var r = [];
              if (!n.hasOwnProperty(t)) return r;
              var i = n[t],
                o = this.getModeAt(e);
              if ('string' == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
              else if (o[t])
                for (var s = 0; s < o[t].length; s++) {
                  var a = i[o[t][s]];
                  a && r.push(a);
                }
              else
                o.helperType && i[o.helperType]
                  ? r.push(i[o.helperType])
                  : i[o.name] && r.push(i[o.name]);
              for (var l = 0; l < i._global.length; l++) {
                var c = i._global[l];
                c.pred(o, this) && -1 == indexOf(r, c.val) && r.push(c.val);
              }
              return r;
            },
            getStateAfter: function(e, t) {
              var n = this.doc;
              return getContextBefore(
                this,
                (e = clipLine(n, null == e ? n.first + n.size - 1 : e)) + 1,
                t,
              ).state;
            },
            cursorCoords: function(e, t) {
              var n = this.doc.sel.primary();
              return cursorCoords(
                this,
                null == e
                  ? n.head
                  : 'object' == typeof e
                    ? clipPos(this.doc, e)
                    : e ? n.from() : n.to(),
                t || 'page',
              );
            },
            charCoords: function(e, t) {
              return charCoords(this, clipPos(this.doc, e), t || 'page');
            },
            coordsChar: function(e, t) {
              return coordsChar(
                this,
                (e = fromCoordSystem(this, e, t || 'page')).left,
                e.top,
              );
            },
            lineAtHeight: function(e, t) {
              return (
                (e = fromCoordSystem(this, { top: e, left: 0 }, t || 'page')
                  .top),
                lineAtHeight(this.doc, e + this.display.viewOffset)
              );
            },
            heightAtLine: function(e, t, n) {
              var r,
                i = !1;
              if ('number' == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first
                  ? (e = this.doc.first)
                  : e > o && ((e = o), (i = !0)),
                  (r = getLine(this.doc, e));
              } else r = e;
              return (
                intoCoordSystem(
                  this,
                  r,
                  { top: 0, left: 0 },
                  t || 'page',
                  n || i,
                ).top + (i ? this.doc.height - heightAtLine(r) : 0)
              );
            },
            defaultTextHeight: function() {
              return textHeight(this.display);
            },
            defaultCharWidth: function() {
              return charWidth(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(e, t, n, r, i) {
              var o = this.display,
                s = (e = cursorCoords(this, clipPos(this.doc, e))).bottom,
                a = e.left;
              if (
                ((t.style.position = 'absolute'),
                t.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(t),
                o.sizer.appendChild(t),
                'over' == r)
              )
                s = e.top;
              else if ('above' == r || 'near' == r) {
                var l = Math.max(o.wrapper.clientHeight, this.doc.height),
                  c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ('above' == r || e.bottom + t.offsetHeight > l) &&
                e.top > t.offsetHeight
                  ? (s = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= l && (s = e.bottom),
                  a + t.offsetWidth > c && (a = c - t.offsetWidth);
              }
              (t.style.top = s + 'px'),
                (t.style.left = t.style.right = ''),
                'right' == i
                  ? ((a = o.sizer.clientWidth - t.offsetWidth),
                    (t.style.right = '0px'))
                  : ('left' == i
                      ? (a = 0)
                      : 'middle' == i &&
                        (a = (o.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = a + 'px')),
                n &&
                  (function scrollIntoView(e, t) {
                    var n = calculateScrollPos(e, t);
                    null != n.scrollTop && updateScrollTop(e, n.scrollTop),
                      null != n.scrollLeft && setScrollLeft(e, n.scrollLeft);
                  })(this, {
                    left: a,
                    top: s,
                    right: a + t.offsetWidth,
                    bottom: s + t.offsetHeight,
                  });
            },
            triggerOnKeyDown: methodOp(onKeyDown),
            triggerOnKeyPress: methodOp(onKeyPress),
            triggerOnKeyUp: onKeyUp,
            triggerOnMouseDown: methodOp(onMouseDown),
            execCommand: function(e) {
              if (Ne.hasOwnProperty(e)) return Ne[e].call(null, this);
            },
            triggerElectric: methodOp(function(e) {
              triggerElectric(this, e);
            }),
            findPosH: function(e, t, n, r) {
              var i = 1;
              t < 0 && ((i = -1), (t = -t));
              for (
                var o = clipPos(this.doc, e), s = 0;
                s < t && !(o = findPosH(this.doc, o, i, n, r)).hitSide;
                ++s
              );
              return o;
            },
            moveH: methodOp(function(e, t) {
              var n = this;
              this.extendSelectionsBy(function(r) {
                return n.display.shift || n.doc.extend || r.empty()
                  ? findPosH(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                  : e < 0 ? r.from() : r.to();
              }, D);
            }),
            deleteH: methodOp(function(e, t) {
              var n = this.doc.sel,
                r = this.doc;
              n.somethingSelected()
                ? r.replaceSelection('', null, '+delete')
                : deleteNearSelection(this, function(n) {
                    var i = findPosH(r, n.head, e, t, !1);
                    return e < 0
                      ? { from: i, to: n.head }
                      : { from: n.head, to: i };
                  });
            }),
            findPosV: function(e, t, n, r) {
              var i = 1,
                o = r;
              t < 0 && ((i = -1), (t = -t));
              for (var s = clipPos(this.doc, e), a = 0; a < t; ++a) {
                var l = cursorCoords(this, s, 'div');
                if (
                  (null == o ? (o = l.left) : (l.left = o),
                  (s = findPosV(this, l, i, n)).hitSide)
                )
                  break;
              }
              return s;
            },
            moveV: methodOp(function(e, t) {
              var n = this,
                r = this.doc,
                i = [],
                o =
                  !this.display.shift && !r.extend && r.sel.somethingSelected();
              if (
                (r.extendSelectionsBy(function(s) {
                  if (o) return e < 0 ? s.from() : s.to();
                  var a = cursorCoords(n, s.head, 'div');
                  null != s.goalColumn && (a.left = s.goalColumn),
                    i.push(a.left);
                  var l = findPosV(n, a, e, t);
                  return (
                    'page' == t &&
                      s == r.sel.primary() &&
                      addToScrollTop(n, charCoords(n, l, 'div').top - a.top),
                    l
                  );
                }, D),
                i.length)
              )
                for (var s = 0; s < r.sel.ranges.length; s++)
                  r.sel.ranges[s].goalColumn = i[s];
            }),
            findWordAt: function(e) {
              var t = getLine(this.doc, e.line).text,
                n = e.ch,
                r = e.ch;
              if (t) {
                var i = this.getHelper(e, 'wordChars');
                ('before' != e.sticky && r != t.length) || !n ? ++r : --n;
                for (
                  var o = t.charAt(n),
                    s = isWordChar(o, i)
                      ? function(e) {
                          return isWordChar(e, i);
                        }
                      : /\s/.test(o)
                        ? function(e) {
                            return /\s/.test(e);
                          }
                        : function(e) {
                            return !/\s/.test(e) && !isWordChar(e);
                          };
                  n > 0 && s(t.charAt(n - 1));

                )
                  --n;
                for (; r < t.length && s(t.charAt(r)); ) ++r;
              }
              return new ve(Pos(e.line, n), Pos(e.line, r));
            },
            toggleOverwrite: function(e) {
              (null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? addClass(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : k(this.display.cursorDiv, 'CodeMirror-overwrite'),
                signal(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function() {
              return this.display.input.getField() == activeElt();
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: methodOp(function(e, t) {
              scrollToCoords(this, e, t);
            }),
            getScrollInfo: function() {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height:
                  e.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: e.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this),
                clientWidth: displayWidth(this),
              };
            },
            scrollIntoView: methodOp(function(e, t) {
              null == e
                ? ((e = { from: this.doc.sel.primary().head, to: null }),
                  null == t && (t = this.options.cursorScrollMargin))
                : 'number' == typeof e
                  ? (e = { from: Pos(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line
                  ? (function scrollToRange(e, t) {
                      resolveScrollToPos(e), (e.curOp.scrollToPos = t);
                    })(this, e)
                  : scrollToCoordsRange(this, e.from, e.to, e.margin);
            }),
            setSize: methodOp(function(e, t) {
              var n = this,
                r = function(e) {
                  return 'number' == typeof e || /^\d+$/.test(String(e))
                    ? e + 'px'
                    : e;
                };
              null != e && (this.display.wrapper.style.width = r(e)),
                null != t && (this.display.wrapper.style.height = r(t)),
                this.options.lineWrapping && clearLineMeasurementCache(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      regLineChange(n, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                signal(this, 'refresh', this);
            }),
            operation: function(e) {
              return runInOp(this, e);
            },
            startOperation: function() {
              return startOperation(this);
            },
            endOperation: function() {
              return endOperation(this);
            },
            refresh: methodOp(function() {
              var e = this.display.cachedTextHeight;
              regChange(this),
                (this.curOp.forceUpdate = !0),
                clearCaches(this),
                scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop),
                updateGutterSpace(this),
                (null == e || Math.abs(e - textHeight(this.display)) > 0.5) &&
                  estimateLineHeights(this),
                signal(this, 'refresh', this);
            }),
            swapDoc: methodOp(function(e) {
              var t = this.doc;
              return (
                (t.cm = null),
                attachDoc(this, e),
                clearCaches(this),
                this.display.input.reset(),
                scrollToCoords(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                signalLater(this, 'swapDoc', this, t),
                t
              );
            }),
            getInputField: function() {
              return this.display.input.getField();
            },
            getWrapperElement: function() {
              return this.display.wrapper;
            },
            getScrollerElement: function() {
              return this.display.scroller;
            },
            getGutterElement: function() {
              return this.display.gutters;
            },
          }),
            eventMixin(e),
            (e.registerHelper = function(t, r, i) {
              n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }),
                (n[t][r] = i);
            }),
            (e.registerGlobalHelper = function(t, r, i, o) {
              e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
            });
        })(CodeMirror$1);
      var Ge = 'iter insert remove copy getEditor constructor'.split(' ');
      for (var Ke in Se.prototype)
        Se.prototype.hasOwnProperty(Ke) &&
          indexOf(Ge, Ke) < 0 &&
          (CodeMirror$1.prototype[Ke] = (function(e) {
            return function() {
              return e.apply(this.doc, arguments);
            };
          })(Se.prototype[Ke]));
      return (
        eventMixin(Se),
        (CodeMirror$1.inputStyles = { textarea: je, contenteditable: Ue }),
        (CodeMirror$1.defineMode = function(e) {
          CodeMirror$1.defaults.mode ||
            'null' == e ||
            (CodeMirror$1.defaults.mode = e),
            function defineMode(e, t) {
              arguments.length > 2 &&
                (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                (X[e] = t);
            }.apply(this, arguments);
        }),
        (CodeMirror$1.defineMIME = function defineMIME(e, t) {
          Y[e] = t;
        }),
        CodeMirror$1.defineMode('null', function() {
          return {
            token: function(e) {
              return e.skipToEnd();
            },
          };
        }),
        CodeMirror$1.defineMIME('text/plain', 'null'),
        (CodeMirror$1.defineExtension = function(e, t) {
          CodeMirror$1.prototype[e] = t;
        }),
        (CodeMirror$1.defineDocExtension = function(e, t) {
          Se.prototype[e] = t;
        }),
        (CodeMirror$1.fromTextArea = function fromTextArea(e, t) {
          if (
            (((t = t ? copyObj(t) : {}).value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var n = activeElt();
            t.autofocus =
              n == e ||
              (null != e.getAttribute('autofocus') && n == document.body);
          }
          function save() {
            e.value = s.getValue();
          }
          var r;
          if (
            e.form &&
            (V(e.form, 'submit', save), !t.leaveSubmitMethodAlone)
          ) {
            var i = e.form;
            r = i.submit;
            try {
              var o = (i.submit = function() {
                save(), (i.submit = r), i.submit(), (i.submit = o);
              });
            } catch (e) {}
          }
          (t.finishInit = function(t) {
            (t.save = save),
              (t.getTextArea = function() {
                return e;
              }),
              (t.toTextArea = function() {
                (t.toTextArea = isNaN),
                  save(),
                  e.parentNode.removeChild(t.getWrapperElement()),
                  (e.style.display = ''),
                  e.form &&
                    (off(e.form, 'submit', save),
                    'function' == typeof e.form.submit && (e.form.submit = r));
              });
          }),
            (e.style.display = 'none');
          var s = CodeMirror$1(function(t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return s;
        }),
        (function addLegacyProps(e) {
          (e.off = off),
            (e.on = V),
            (e.wheelEventPixels = wheelEventPixels),
            (e.Doc = Se),
            (e.splitLines = K),
            (e.countColumn = countColumn),
            (e.findColumn = findColumn),
            (e.isWordChar = isWordCharBasic),
            (e.Pass = P),
            (e.signal = signal),
            (e.Line = ne),
            (e.changeEnd = changeEnd),
            (e.scrollbarModel = de),
            (e.Pos = Pos),
            (e.cmpPos = cmp),
            (e.modes = X),
            (e.mimeModes = Y),
            (e.resolveMode = resolveMode),
            (e.getMode = getMode),
            (e.modeExtensions = Z),
            (e.extendMode = extendMode),
            (e.copyState = copyState),
            (e.startState = startState),
            (e.innerMode = innerMode),
            (e.commands = Ne),
            (e.keyMap = Ae),
            (e.keyName = keyName),
            (e.isModifierKey = isModifierKey),
            (e.lookupKey = lookupKey),
            (e.normalizeKeyMap = normalizeKeyMap),
            (e.StringStream = Q),
            (e.SharedTextMarker = xe),
            (e.TextMarker = Ce),
            (e.LineWidget = ye),
            (e.e_preventDefault = e_preventDefault),
            (e.e_stopPropagation = e_stopPropagation),
            (e.e_stop = e_stop),
            (e.addClass = addClass),
            (e.contains = contains),
            (e.rmClass = k),
            (e.keyNames = Me);
        })(CodeMirror$1),
        (CodeMirror$1.version = '5.33.0'),
        CodeMirror$1
      );
    }),
      (e.exports = r());
    var r;
  },
  1472: function(e, t, n) {
    'use strict';
    var r =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          };
        return function(t, n) {
          e(t, n);
          function __() {
            this.constructor = t;
          }
          t.prototype =
            null === n
              ? Object.create(n)
              : ((__.prototype = n.prototype), new __());
        };
      })();
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      o = n(0),
      s = 'undefined' == typeof navigator;
    s || (i = n(1471));
    var a = (function() {
        function Shared(e, t) {
          (this.editor = e), (this.props = t), this.notifyOfDeprecation();
        }
        return (
          (Shared.prototype.notifyOfDeprecation = function() {
            void 0 !== this.props.autoScrollCursorOnSet &&
              console.warn(
                '`autoScrollCursorOnSet` has been deprecated. Use `autoScroll` instead\n\nSee https://github.com/scniro/react-codemirror2#props',
              ),
              void 0 !== this.props.resetCursorOnSet &&
                console.warn(
                  '`resetCursorOnSet` has been deprecated. Use `autoCursor` instead\n\nSee https://github.com/scniro/react-codemirror2#props',
                ),
              void 0 !== this.props.onSet &&
                console.warn(
                  '`onSet` has been deprecated. User `editorDidMount` instead. See https://github.com/scniro/react-codemirror2#events',
                ),
              void 0 !== this.props.onBeforeSet &&
                console.warn(
                  '`onBeforeSet` has been deprecated. User `onBeforeChange` for `Controlled`. instead. See https://github.com/scniro/react-codemirror2#events',
                );
          }),
          (Shared.prototype.wire = function(e) {
            var t = this;
            switch (e) {
              case 'onBlur':
                this.editor.on('blur', function(e, n) {
                  t.props.onBlur(t.editor, n);
                });
                break;
              case 'onCursor':
                this.editor.on('cursorActivity', function(e) {
                  t.props.onCursor(t.editor, t.editor.getCursor());
                });
                break;
              case 'onCursorActivity':
                this.editor.on('cursorActivity', function(e) {
                  t.props.onCursorActivity(t.editor);
                });
                break;
              case 'onDragEnter':
                this.editor.on('dragenter', function(e, n) {
                  t.props.onDragEnter(t.editor, n);
                });
                break;
              case 'onDragOver':
                this.editor.on('dragover', function(e, n) {
                  t.props.onDragOver(t.editor, n);
                });
                break;
              case 'onDrop':
                this.editor.on('drop', function(e, n) {
                  t.props.onDrop(t.editor, n);
                });
                break;
              case 'onFocus':
                this.editor.on('focus', function(e, n) {
                  t.props.onFocus(t.editor, n);
                });
                break;
              case 'onGutterClick':
                this.editor.on('gutterClick', function(e, n, r, i) {
                  t.props.onGutterClick(t.editor, n, r, i);
                });
                break;
              case 'onKeyDown':
                this.editor.on('keydown', function(e, n) {
                  t.props.onKeyDown(t.editor, n);
                });
                break;
              case 'onKeyPress':
                this.editor.on('keypress', function(e, n) {
                  t.props.onKeyPress(t.editor, n);
                });
                break;
              case 'onKeyUp':
                this.editor.on('keyup', function(e, n) {
                  t.props.onKeyUp(t.editor, n);
                });
                break;
              case 'onScroll':
                this.editor.on('scroll', function(e) {
                  t.props.onScroll(t.editor, t.editor.getScrollInfo());
                });
                break;
              case 'onSelection':
                this.editor.on('beforeSelectionChange', function(e, n) {
                  t.props.onSelection(t.editor, n);
                });
                break;
              case 'onUpdate':
                this.editor.on('update', function(e) {
                  t.props.onUpdate(t.editor);
                });
                break;
              case 'onViewportChange':
                this.editor.on('viewportChange', function(e, n, r) {
                  t.props.onViewportChange(t.editor, n, r);
                });
            }
          }),
          Shared
        );
      })(),
      l = (function(e) {
        r(Controlled, e);
        function Controlled(t) {
          var n = e.call(this, t) || this;
          return s
            ? n
            : ((n.deferred = null),
              (n.emulating = !1),
              (n.hydrated = !1),
              (n.initCb = function() {
                n.props.editorDidConfigure &&
                  n.props.editorDidConfigure(n.editor);
              }),
              (n.mounted = !1),
              n);
        }
        return (
          (Controlled.prototype.setCursor = function(e, t, n) {
            var r = this.editor.getDoc();
            n && this.editor.focus(),
              t ? r.setCursor(e) : r.setCursor(e, null, { scroll: !1 });
          }),
          (Controlled.prototype.moveCursor = function(e, t) {
            var n = this.editor.getDoc();
            t ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 });
          }),
          (Controlled.prototype.hydrate = function(e) {
            var t = this;
            Object.keys(e.options || {}).forEach(function(n) {
              t.editor.setOption(n, e.options[n]),
                t.mirror.setOption(n, e.options[n]);
            }),
              this.hydrated ||
                (this.mounted && this.deferred
                  ? this.resolveChange()
                  : this.initChange(e.value || '')),
              (this.hydrated = !0);
          }),
          (Controlled.prototype.initChange = function(e) {
            this.emulating = !0;
            var t = this.editor.lastLine(),
              n = this.editor.getLine(this.editor.lastLine()).length;
            this.editor.replaceRange(
              e || '',
              { line: 0, ch: 0 },
              { line: t, ch: n },
            ),
              this.mirror.setValue(e),
              this.editor.clearHistory(),
              this.mirror.clearHistory(),
              (this.emulating = !1);
          }),
          (Controlled.prototype.resolveChange = function() {
            (this.emulating = !0),
              'undo' === this.deferred.origin
                ? this.editor.undo()
                : 'redo' === this.deferred.origin
                  ? this.editor.redo()
                  : this.editor.replaceRange(
                      this.deferred.text,
                      this.deferred.from,
                      this.deferred.to,
                      this.deferred.origin,
                    ),
              (this.emulating = !1),
              (this.deferred = null);
          }),
          (Controlled.prototype.mirrorChange = function(e) {
            return (
              'undo' === e.origin
                ? (this.editor.setHistory(this.mirror.getHistory()),
                  this.mirror.undo())
                : 'redo' === e.origin
                  ? (this.editor.setHistory(this.mirror.getHistory()),
                    this.mirror.redo())
                  : this.mirror.replaceRange(e.text, e.from, e.to, e.origin),
              this.mirror.getValue()
            );
          }),
          (Controlled.prototype.componentWillMount = function() {
            s || (this.props.editorWillMount && this.props.editorWillMount());
          }),
          (Controlled.prototype.componentDidMount = function() {
            var e = this;
            if (!s) {
              if (
                (this.props.defineMode &&
                  this.props.defineMode.name &&
                  this.props.defineMode.fn &&
                  i.defineMode(
                    this.props.defineMode.name,
                    this.props.defineMode.fn,
                  ),
                (this.editor = i(this.ref)),
                (this.shared = new a(this.editor, this.props)),
                (this.mirror = i(function() {})),
                this.editor.on('electricInput', function() {
                  e.mirror.setHistory(e.editor.getHistory());
                }),
                this.editor.on('cursorActivity', function() {
                  e.mirror.setCursor(e.editor.getCursor());
                }),
                this.editor.on('beforeChange', function(t, n) {
                  if (!e.emulating) {
                    n.cancel(), (e.deferred = n);
                    var r = e.mirrorChange(e.deferred);
                    e.props.onBeforeChange &&
                      e.props.onBeforeChange(e.editor, e.deferred, r);
                  }
                }),
                this.editor.on('change', function(t, n) {
                  e.mounted &&
                    e.props.onChange &&
                    e.props.onChange(e.editor, n, e.editor.getValue());
                }),
                this.props.onBlur && this.shared.wire('onBlur'),
                this.props.onCursor && this.shared.wire('onCursor'),
                this.props.onCursorActivity &&
                  this.shared.wire('onCursorActivity'),
                this.props.onDragEnter && this.shared.wire('onDragEnter'),
                this.props.onDragOver && this.shared.wire('onDragOver'),
                this.props.onDrop && this.shared.wire('onDrop'),
                this.props.onFocus && this.shared.wire('onFocus'),
                this.props.onGutterClick && this.shared.wire('onGutterClick'),
                this.props.onKeyDown && this.shared.wire('onKeyDown'),
                this.props.onKeyPress && this.shared.wire('onKeyPress'),
                this.props.onKeyUp && this.shared.wire('onKeyUp'),
                this.props.onScroll && this.shared.wire('onScroll'),
                this.props.onSelection && this.shared.wire('onSelection'),
                this.props.onUpdate && this.shared.wire('onUpdate'),
                this.props.onViewportChange &&
                  this.shared.wire('onViewportChange'),
                this.hydrate(this.props),
                this.props.selection)
              ) {
                this.editor.getDoc().setSelections(this.props.selection);
              }
              this.props.cursor &&
                this.setCursor(
                  this.props.cursor,
                  this.props.autoScroll || !1,
                  this.props.autoFocus || !1,
                ),
                this.props.scroll &&
                  this.editor.scrollTo(
                    this.props.scroll.x,
                    this.props.scroll.y,
                  ),
                (this.mounted = !0),
                this.props.editorDidMount &&
                  this.props.editorDidMount(
                    this.editor,
                    this.editor.getValue(),
                    this.initCb,
                  );
            }
          }),
          (Controlled.prototype.componentWillReceiveProps = function(e) {
            if (!s) {
              var t;
              e.value !== this.props.value && (this.hydrated = !1),
                this.props.autoCursor ||
                  void 0 === this.props.autoCursor ||
                  (t = this.editor.getCursor()),
                this.hydrate(e),
                this.props.autoCursor ||
                  void 0 === this.props.autoCursor ||
                  this.moveCursor(t, this.props.autoScroll || !1);
            }
          }),
          (Controlled.prototype.componentWillUnmount = function() {
            s ||
              (this.props.editorWillUnmount && this.props.editorWillUnmount(i));
          }),
          (Controlled.prototype.shouldComponentUpdate = function(e, t) {
            return !s;
          }),
          (Controlled.prototype.render = function() {
            var e = this;
            if (s) return null;
            var t = this.props.className
              ? 'react-codemirror2 ' + this.props.className
              : 'react-codemirror2';
            return o.createElement('div', {
              className: t,
              ref: function(t) {
                return (e.ref = t);
              },
            });
          }),
          Controlled
        );
      })(o.Component);
    t.Controlled = l;
    var c = (function(e) {
      r(UnControlled, e);
      function UnControlled(t) {
        var n = e.call(this, t) || this;
        return s
          ? n
          : ((n.continueChange = !1),
            (n.hydrated = !1),
            (n.initCb = function() {
              n.props.editorDidConfigure &&
                n.props.editorDidConfigure(n.editor);
            }),
            (n.mounted = !1),
            (n.onBeforeChangeCb = function() {
              n.continueChange = !0;
            }),
            n);
      }
      return (
        (UnControlled.prototype.setCursor = function(e, t, n) {
          var r = this.editor.getDoc();
          n && this.editor.focus(),
            t ? r.setCursor(e) : r.setCursor(e, null, { scroll: !1 });
        }),
        (UnControlled.prototype.moveCursor = function(e, t) {
          var n = this.editor.getDoc();
          t ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 });
        }),
        (UnControlled.prototype.hydrate = function(e) {
          var t = this;
          if (
            (Object.keys(e.options || {}).forEach(function(n) {
              return t.editor.setOption(n, e.options[n]);
            }),
            !this.hydrated)
          ) {
            var n = this.editor.lastLine(),
              r = this.editor.getLine(this.editor.lastLine()).length;
            this.editor.replaceRange(
              e.value || '',
              { line: 0, ch: 0 },
              { line: n, ch: r },
            );
          }
          this.hydrated = !0;
        }),
        (UnControlled.prototype.componentWillMount = function() {
          s || (this.props.editorWillMount && this.props.editorWillMount());
        }),
        (UnControlled.prototype.componentDidMount = function() {
          var e = this;
          if (!s) {
            if (
              (this.props.defineMode &&
                this.props.defineMode.name &&
                this.props.defineMode.fn &&
                i.defineMode(
                  this.props.defineMode.name,
                  this.props.defineMode.fn,
                ),
              (this.editor = i(this.ref)),
              (this.shared = new a(this.editor, this.props)),
              this.editor.on('beforeChange', function(t, n) {
                e.props.onBeforeChange &&
                  e.props.onBeforeChange(e.editor, n, null, e.onBeforeChangeCb);
              }),
              this.editor.on('change', function(t, n) {
                if (e.mounted)
                  if (e.props.onBeforeChange) {
                    if (!e.continueChange) return;
                    e.props.onChange(e.editor, n, e.editor.getValue());
                  } else e.props.onChange(e.editor, n, e.editor.getValue());
              }),
              this.props.onBlur && this.shared.wire('onBlur'),
              this.props.onCursor && this.shared.wire('onCursor'),
              this.props.onCursorActivity &&
                this.shared.wire('onCursorActivity'),
              this.props.onDragEnter && this.shared.wire('onDragEnter'),
              this.props.onDragOver && this.shared.wire('onDragOver'),
              this.props.onDrop && this.shared.wire('onDrop'),
              this.props.onFocus && this.shared.wire('onFocus'),
              this.props.onGutterClick && this.shared.wire('onGutterClick'),
              this.props.onKeyDown && this.shared.wire('onKeyDown'),
              this.props.onKeyPress && this.shared.wire('onKeyPress'),
              this.props.onKeyUp && this.shared.wire('onKeyUp'),
              this.props.onScroll && this.shared.wire('onScroll'),
              this.props.onSelection && this.shared.wire('onSelection'),
              this.props.onUpdate && this.shared.wire('onUpdate'),
              this.props.onViewportChange &&
                this.shared.wire('onViewportChange'),
              this.hydrate(this.props),
              this.props.selection)
            ) {
              this.editor.getDoc().setSelections(this.props.selection);
            }
            this.props.cursor &&
              this.setCursor(
                this.props.cursor,
                this.props.autoScroll || !1,
                this.props.autoFocus || !1,
              ),
              this.props.scroll &&
                this.editor.scrollTo(this.props.scroll.x, this.props.scroll.y),
              (this.mounted = !0),
              this.editor.clearHistory(),
              this.props.editorDidMount &&
                this.props.editorDidMount(
                  this.editor,
                  this.editor.getValue(),
                  this.initCb,
                );
          }
        }),
        (UnControlled.prototype.componentWillReceiveProps = function(e) {
          if (!s) {
            var t;
            e.value !== this.props.value && (this.hydrated = !1),
              this.props.autoCursor ||
                void 0 === this.props.autoCursor ||
                (t = this.editor.getCursor()),
              this.hydrate(e),
              this.props.autoCursor ||
                void 0 === this.props.autoCursor ||
                this.moveCursor(t, this.props.autoScroll || !1);
          }
        }),
        (UnControlled.prototype.componentWillUnmount = function() {
          s ||
            (this.props.editorWillUnmount && this.props.editorWillUnmount(i));
        }),
        (UnControlled.prototype.shouldComponentUpdate = function(e, t) {
          return !s;
        }),
        (UnControlled.prototype.render = function() {
          var e = this;
          if (s) return null;
          var t = this.props.className
            ? 'react-codemirror2 ' + this.props.className
            : 'react-codemirror2';
          return o.createElement('div', {
            className: t,
            ref: function(t) {
              return (e.ref = t);
            },
          });
        }),
        UnControlled
      );
    })(o.Component);
    t.UnControlled = c;
  },
  1473: function(e, t, n) {
    (function(e) {
      'use strict';
      function Context(e, t, n, r) {
        (this.state = e), (this.mode = t), (this.depth = n), (this.prev = r);
      }
      e.defineMode(
        'jsx',
        function(t, n) {
          var r = e.getMode(t, {
              name: 'xml',
              allowMissing: !0,
              multilineTagIndentPastTag: !1,
              allowMissingTagName: !0,
            }),
            i = e.getMode(t, (n && n.base) || 'javascript');
          function flatXMLIndent(e) {
            var t = e.tagName;
            e.tagName = null;
            var n = r.indent(e, '');
            return (e.tagName = t), n;
          }
          function token(n, o) {
            return o.context.mode == r
              ? (function xmlToken(n, o, s) {
                  if (2 == s.depth)
                    return (
                      n.match(/^.*?\*\//) ? (s.depth = 1) : n.skipToEnd(),
                      'comment'
                    );
                  if ('{' == n.peek()) {
                    r.skipAttribute(s.state);
                    var a = flatXMLIndent(s.state),
                      l = s.state.context;
                    if (l && n.match(/^[^>]*>\s*$/, !1)) {
                      for (; l.prev && !l.startOfLine; ) l = l.prev;
                      l.startOfLine
                        ? (a -= t.indentUnit)
                        : s.prev.state.lexical &&
                          (a = s.prev.state.lexical.indented);
                    } else 1 == s.depth && (a += t.indentUnit);
                    return (
                      (o.context = new Context(
                        e.startState(i, a),
                        i,
                        0,
                        o.context,
                      )),
                      null
                    );
                  }
                  if (1 == s.depth) {
                    if ('<' == n.peek())
                      return (
                        r.skipAttribute(s.state),
                        (o.context = new Context(
                          e.startState(r, flatXMLIndent(s.state)),
                          r,
                          0,
                          o.context,
                        )),
                        null
                      );
                    if (n.match('//')) return n.skipToEnd(), 'comment';
                    if (n.match('/*')) return (s.depth = 2), token(n, o);
                  }
                  var c,
                    u = r.token(n, s.state),
                    d = n.current();
                  /\btag\b/.test(u)
                    ? />$/.test(d)
                      ? s.state.context
                        ? (s.depth = 0)
                        : (o.context = o.context.prev)
                      : /^</.test(d) && (s.depth = 1)
                    : !u && (c = d.indexOf('{')) > -1 && n.backUp(d.length - c);
                  return u;
                })(n, o, o.context)
              : (function jsToken(t, n, o) {
                  if ('<' == t.peek() && i.expressionAllowed(t, o.state))
                    return (
                      i.skipExpression(o.state),
                      (n.context = new Context(
                        e.startState(r, i.indent(o.state, '')),
                        r,
                        0,
                        n.context,
                      )),
                      null
                    );
                  var s = i.token(t, o.state);
                  if (!s && null != o.depth) {
                    var a = t.current();
                    '{' == a
                      ? o.depth++
                      : '}' == a &&
                        0 == --o.depth &&
                        (n.context = n.context.prev);
                  }
                  return s;
                })(n, o, o.context);
          }
          return {
            startState: function() {
              return { context: new Context(e.startState(i), i) };
            },
            copyState: function(t) {
              return {
                context: (function copyContext(t) {
                  return new Context(
                    e.copyState(t.mode, t.state),
                    t.mode,
                    t.depth,
                    t.prev && copyContext(t.prev),
                  );
                })(t.context),
              };
            },
            token: token,
            indent: function(e, t, n) {
              return e.context.mode.indent(e.context.state, t, n);
            },
            innerMode: function(e) {
              return e.context;
            },
          };
        },
        'xml',
        'javascript',
      ),
        e.defineMIME('text/jsx', 'jsx'),
        e.defineMIME('text/typescript-jsx', {
          name: 'jsx',
          base: { name: 'javascript', typescript: !0 },
        });
    })(n(1471), n(1474), n(1475));
  },
  1474: function(e, t, n) {
    (function(e) {
      'use strict';
      var t = {
          autoSelfClosers: {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
            menuitem: !0,
          },
          implicitlyClosed: {
            dd: !0,
            li: !0,
            optgroup: !0,
            option: !0,
            p: !0,
            rp: !0,
            rt: !0,
            tbody: !0,
            td: !0,
            tfoot: !0,
            th: !0,
            tr: !0,
          },
          contextGrabbers: {
            dd: { dd: !0, dt: !0 },
            dt: { dd: !0, dt: !0 },
            li: { li: !0 },
            option: { option: !0, optgroup: !0 },
            optgroup: { optgroup: !0 },
            p: {
              address: !0,
              article: !0,
              aside: !0,
              blockquote: !0,
              dir: !0,
              div: !0,
              dl: !0,
              fieldset: !0,
              footer: !0,
              form: !0,
              h1: !0,
              h2: !0,
              h3: !0,
              h4: !0,
              h5: !0,
              h6: !0,
              header: !0,
              hgroup: !0,
              hr: !0,
              menu: !0,
              nav: !0,
              ol: !0,
              p: !0,
              pre: !0,
              section: !0,
              table: !0,
              ul: !0,
            },
            rp: { rp: !0, rt: !0 },
            rt: { rp: !0, rt: !0 },
            tbody: { tbody: !0, tfoot: !0 },
            td: { td: !0, th: !0 },
            tfoot: { tbody: !0 },
            th: { td: !0, th: !0 },
            thead: { tbody: !0, tfoot: !0 },
            tr: { tr: !0 },
          },
          doNotIndent: { pre: !0 },
          allowUnquoted: !0,
          allowMissing: !0,
          caseFold: !0,
        },
        n = {
          autoSelfClosers: {},
          implicitlyClosed: {},
          contextGrabbers: {},
          doNotIndent: {},
          allowUnquoted: !1,
          allowMissing: !1,
          allowMissingTagName: !1,
          caseFold: !1,
        };
      e.defineMode('xml', function(r, i) {
        var o = r.indentUnit,
          s = {},
          a = i.htmlMode ? t : n;
        for (var l in a) s[l] = a[l];
        for (var l in i) s[l] = i[l];
        var c, u;
        function inText(e, t) {
          function chain(n) {
            return (t.tokenize = n), n(e, t);
          }
          var n = e.next();
          if ('<' == n)
            return e.eat('!')
              ? e.eat('[')
                ? e.match('CDATA[') ? chain(inBlock('atom', ']]>')) : null
                : e.match('--')
                  ? chain(inBlock('comment', '--\x3e'))
                  : e.match('DOCTYPE', !0, !0)
                    ? (e.eatWhile(/[\w\._\-]/),
                      chain(
                        (function doctype(e) {
                          return function(t, n) {
                            for (var r; null != (r = t.next()); ) {
                              if ('<' == r)
                                return (
                                  (n.tokenize = doctype(e + 1)),
                                  n.tokenize(t, n)
                                );
                              if ('>' == r) {
                                if (1 == e) {
                                  n.tokenize = inText;
                                  break;
                                }
                                return (
                                  (n.tokenize = doctype(e - 1)),
                                  n.tokenize(t, n)
                                );
                              }
                            }
                            return 'meta';
                          };
                        })(1),
                      ))
                    : null
              : e.eat('?')
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = inBlock('meta', '?>')),
                  'meta')
                : ((c = e.eat('/') ? 'closeTag' : 'openTag'),
                  (t.tokenize = inTag),
                  'tag bracket');
          if ('&' == n) {
            return (e.eat('#')
            ? e.eat('x')
              ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';')
              : e.eatWhile(/[\d]/) && e.eat(';')
            : e.eatWhile(/[\w\.\-:]/) && e.eat(';'))
              ? 'atom'
              : 'error';
          }
          return e.eatWhile(/[^&<]/), null;
        }
        inText.isInText = !0;
        function inTag(e, t) {
          var n = e.next();
          if ('>' == n || ('/' == n && e.eat('>')))
            return (
              (t.tokenize = inText),
              (c = '>' == n ? 'endTag' : 'selfcloseTag'),
              'tag bracket'
            );
          if ('=' == n) return (c = 'equals'), null;
          if ('<' == n) {
            (t.tokenize = inText),
              (t.state = baseState),
              (t.tagName = t.tagStart = null);
            var r = t.tokenize(e, t);
            return r ? r + ' tag error' : 'tag error';
          }
          return /[\'\"]/.test(n)
            ? ((t.tokenize = (function inAttribute(e) {
                var t = function(t, n) {
                  for (; !t.eol(); )
                    if (t.next() == e) {
                      n.tokenize = inTag;
                      break;
                    }
                  return 'string';
                };
                return (t.isInAttribute = !0), t;
              })(n)),
              (t.stringStartCol = e.column()),
              t.tokenize(e, t))
            : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
        }
        function inBlock(e, t) {
          return function(n, r) {
            for (; !n.eol(); ) {
              if (n.match(t)) {
                r.tokenize = inText;
                break;
              }
              n.next();
            }
            return e;
          };
        }
        function popContext(e) {
          e.context && (e.context = e.context.prev);
        }
        function maybePopContext(e, t) {
          for (var n; ; ) {
            if (!e.context) return;
            if (
              ((n = e.context.tagName),
              !s.contextGrabbers.hasOwnProperty(n) ||
                !s.contextGrabbers[n].hasOwnProperty(t))
            )
              return;
            popContext(e);
          }
        }
        function baseState(e, t, n) {
          return 'openTag' == e
            ? ((n.tagStart = t.column()), tagNameState)
            : 'closeTag' == e ? closeTagNameState : baseState;
        }
        function tagNameState(e, t, n) {
          return 'word' == e
            ? ((n.tagName = t.current()), (u = 'tag'), attrState)
            : s.allowMissingTagName && 'endTag' == e
              ? ((u = 'tag bracket'), attrState(e, t, n))
              : ((u = 'error'), tagNameState);
        }
        function closeTagNameState(e, t, n) {
          if ('word' == e) {
            var r = t.current();
            return (
              n.context &&
                n.context.tagName != r &&
                s.implicitlyClosed.hasOwnProperty(n.context.tagName) &&
                popContext(n),
              (n.context && n.context.tagName == r) || !1 === s.matchClosing
                ? ((u = 'tag'), closeState)
                : ((u = 'tag error'), closeStateErr)
            );
          }
          return s.allowMissingTagName && 'endTag' == e
            ? ((u = 'tag bracket'), closeState(e, t, n))
            : ((u = 'error'), closeStateErr);
        }
        function closeState(e, t, n) {
          return 'endTag' != e
            ? ((u = 'error'), closeState)
            : (popContext(n), baseState);
        }
        function closeStateErr(e, t, n) {
          return (u = 'error'), closeState(e, 0, n);
        }
        function attrState(e, t, n) {
          if ('word' == e) return (u = 'attribute'), attrEqState;
          if ('endTag' == e || 'selfcloseTag' == e) {
            var r = n.tagName,
              i = n.tagStart;
            return (
              (n.tagName = n.tagStart = null),
              'selfcloseTag' == e || s.autoSelfClosers.hasOwnProperty(r)
                ? maybePopContext(n, r)
                : (maybePopContext(n, r),
                  (n.context = new function Context(e, t, n) {
                    (this.prev = e.context),
                      (this.tagName = t),
                      (this.indent = e.indented),
                      (this.startOfLine = n),
                      (s.doNotIndent.hasOwnProperty(t) ||
                        (e.context && e.context.noIndent)) &&
                        (this.noIndent = !0);
                  }(n, r, i == n.indented))),
              baseState
            );
          }
          return (u = 'error'), attrState;
        }
        function attrEqState(e, t, n) {
          return 'equals' == e
            ? attrValueState
            : (s.allowMissing || (u = 'error'), attrState(e, 0, n));
        }
        function attrValueState(e, t, n) {
          return 'string' == e
            ? attrContinuedState
            : 'word' == e && s.allowUnquoted
              ? ((u = 'string'), attrState)
              : ((u = 'error'), attrState(e, 0, n));
        }
        function attrContinuedState(e, t, n) {
          return 'string' == e ? attrContinuedState : attrState(e, 0, n);
        }
        return {
          startState: function(e) {
            var t = {
              tokenize: inText,
              state: baseState,
              indented: e || 0,
              tagName: null,
              tagStart: null,
              context: null,
            };
            return null != e && (t.baseIndent = e), t;
          },
          token: function(e, t) {
            if (
              (!t.tagName && e.sol() && (t.indented = e.indentation()),
              e.eatSpace())
            )
              return null;
            c = null;
            var n = t.tokenize(e, t);
            return (
              (n || c) &&
                'comment' != n &&
                ((u = null),
                (t.state = t.state(c || n, e, t)),
                u && (n = 'error' == u ? n + ' error' : u)),
              n
            );
          },
          indent: function(t, n, r) {
            var i = t.context;
            if (t.tokenize.isInAttribute)
              return t.tagStart == t.indented
                ? t.stringStartCol + 1
                : t.indented + o;
            if (i && i.noIndent) return e.Pass;
            if (t.tokenize != inTag && t.tokenize != inText)
              return r ? r.match(/^(\s*)/)[0].length : 0;
            if (t.tagName)
              return !1 !== s.multilineTagIndentPastTag
                ? t.tagStart + t.tagName.length + 2
                : t.tagStart + o * (s.multilineTagIndentFactor || 1);
            if (s.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
            var a = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
            if (a && a[1])
              for (; i; ) {
                if (i.tagName == a[2]) {
                  i = i.prev;
                  break;
                }
                if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                i = i.prev;
              }
            else if (a)
              for (; i; ) {
                var l = s.contextGrabbers[i.tagName];
                if (!l || !l.hasOwnProperty(a[2])) break;
                i = i.prev;
              }
            for (; i && i.prev && !i.startOfLine; ) i = i.prev;
            return i ? i.indent + o : t.baseIndent || 0;
          },
          electricInput: /<\/[\s\w:]+>$/,
          blockCommentStart: '\x3c!--',
          blockCommentEnd: '--\x3e',
          configuration: s.htmlMode ? 'html' : 'xml',
          helperType: s.htmlMode ? 'html' : 'xml',
          skipAttribute: function(e) {
            e.state == attrValueState && (e.state = attrState);
          },
        };
      }),
        e.defineMIME('text/xml', 'xml'),
        e.defineMIME('application/xml', 'xml'),
        e.mimeModes.hasOwnProperty('text/html') ||
          e.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
    })(n(1471));
  },
  1475: function(e, t, n) {
    (function(e) {
      'use strict';
      e.defineMode('javascript', function(t, n) {
        var r = t.indentUnit,
          i = n.statementIndent,
          o = n.jsonld,
          s = n.json || o,
          a = n.typescript,
          l = n.wordCharacters || /[\w$\xa1-\uffff]/,
          c = (function() {
            function kw(e) {
              return { type: e, style: 'keyword' };
            }
            var e = kw('keyword a'),
              t = kw('keyword b'),
              n = kw('keyword c'),
              r = kw('keyword d'),
              i = kw('operator'),
              o = { type: 'atom', style: 'atom' };
            return {
              if: kw('if'),
              while: e,
              with: e,
              else: t,
              do: t,
              try: t,
              finally: t,
              return: r,
              break: r,
              continue: r,
              new: kw('new'),
              delete: n,
              void: n,
              throw: n,
              debugger: kw('debugger'),
              var: kw('var'),
              const: kw('var'),
              let: kw('var'),
              function: kw('function'),
              catch: kw('catch'),
              for: kw('for'),
              switch: kw('switch'),
              case: kw('case'),
              default: kw('default'),
              in: i,
              typeof: i,
              instanceof: i,
              true: o,
              false: o,
              null: o,
              undefined: o,
              NaN: o,
              Infinity: o,
              this: kw('this'),
              class: kw('class'),
              super: kw('atom'),
              yield: n,
              export: kw('export'),
              import: kw('import'),
              extends: n,
              await: n,
            };
          })(),
          u = /[+\-*&%=<>!?|~^@]/,
          d = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        var p, h;
        function ret(e, t, n) {
          return (p = e), (h = n), t;
        }
        function tokenBase(e, t) {
          var n = e.next();
          if ('"' == n || "'" == n)
            return (
              (t.tokenize = (function tokenString(e) {
                return function(t, n) {
                  var r,
                    i = !1;
                  if (o && '@' == t.peek() && t.match(d))
                    return (
                      (n.tokenize = tokenBase), ret('jsonld-keyword', 'meta')
                    );
                  for (; null != (r = t.next()) && (r != e || i); )
                    i = !i && '\\' == r;
                  return i || (n.tokenize = tokenBase), ret('string', 'string');
                };
              })(n)),
              t.tokenize(e, t)
            );
          if ('.' == n && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
            return ret('number', 'number');
          if ('.' == n && e.match('..')) return ret('spread', 'meta');
          if (/[\[\]{}\(\),;\:\.]/.test(n)) return ret(n);
          if ('=' == n && e.eat('>')) return ret('=>', 'operator');
          if ('0' == n && e.eat(/x/i))
            return e.eatWhile(/[\da-f]/i), ret('number', 'number');
          if ('0' == n && e.eat(/o/i))
            return e.eatWhile(/[0-7]/i), ret('number', 'number');
          if ('0' == n && e.eat(/b/i))
            return e.eatWhile(/[01]/i), ret('number', 'number');
          if (/\d/.test(n))
            return (
              e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
              ret('number', 'number')
            );
          if ('/' == n)
            return e.eat('*')
              ? ((t.tokenize = tokenComment), tokenComment(e, t))
              : e.eat('/')
                ? (e.skipToEnd(), ret('comment', 'comment'))
                : expressionAllowed(e, t, 1)
                  ? ((function readRegexp(e) {
                      for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                        if (!n) {
                          if ('/' == t && !r) return;
                          '[' == t ? (r = !0) : r && ']' == t && (r = !1);
                        }
                        n = !n && '\\' == t;
                      }
                    })(e),
                    e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                    ret('regexp', 'string-2'))
                  : (e.eat('='), ret('operator', 'operator', e.current()));
          if ('`' == n) return (t.tokenize = tokenQuasi), tokenQuasi(e, t);
          if ('#' == n) return e.skipToEnd(), ret('error', 'error');
          if (u.test(n))
            return (
              ('>' == n && t.lexical && '>' == t.lexical.type) ||
                (e.eat('=')
                  ? ('!' != n && '=' != n) || e.eat('=')
                  : /[<>*+\-]/.test(n) && (e.eat(n), '>' == n && e.eat(n))),
              ret('operator', 'operator', e.current())
            );
          if (l.test(n)) {
            e.eatWhile(l);
            var r = e.current();
            if ('.' != t.lastType) {
              if (c.propertyIsEnumerable(r)) {
                var i = c[r];
                return ret(i.type, i.style, r);
              }
              if ('async' == r && e.match(/^(\s|\/\*.*?\*\/)*[\(\w]/, !1))
                return ret('async', 'keyword', r);
            }
            return ret('variable', 'variable', r);
          }
        }
        function tokenComment(e, t) {
          for (var n, r = !1; (n = e.next()); ) {
            if ('/' == n && r) {
              t.tokenize = tokenBase;
              break;
            }
            r = '*' == n;
          }
          return ret('comment', 'comment');
        }
        function tokenQuasi(e, t) {
          for (var n, r = !1; null != (n = e.next()); ) {
            if (!r && ('`' == n || ('$' == n && e.eat('{')))) {
              t.tokenize = tokenBase;
              break;
            }
            r = !r && '\\' == n;
          }
          return ret('quasi', 'string-2', e.current());
        }
        var f = '([{}])';
        function findFatArrow(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null);
          var n = e.string.indexOf('=>', e.start);
          if (!(n < 0)) {
            if (a) {
              var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                e.string.slice(e.start, n),
              );
              r && (n = r.index);
            }
            for (var i = 0, o = !1, s = n - 1; s >= 0; --s) {
              var c = e.string.charAt(s),
                u = f.indexOf(c);
              if (u >= 0 && u < 3) {
                if (!i) {
                  ++s;
                  break;
                }
                if (0 == --i) {
                  '(' == c && (o = !0);
                  break;
                }
              } else if (u >= 3 && u < 6) ++i;
              else if (l.test(c)) o = !0;
              else {
                if (/["'\/]/.test(c)) return;
                if (o && !i) {
                  ++s;
                  break;
                }
              }
            }
            o && !i && (t.fatArrowAt = s);
          }
        }
        var g = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          'jsonld-keyword': !0,
        };
        function JSLexical(e, t, n, r, i, o) {
          (this.indented = e),
            (this.column = t),
            (this.type = n),
            (this.prev = i),
            (this.info = o),
            null != r && (this.align = r);
        }
        function inScope(e, t) {
          for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
          for (var r = e.context; r; r = r.prev)
            for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
        }
        var m = { state: null, column: null, marked: null, cc: null };
        function pass() {
          for (var e = arguments.length - 1; e >= 0; e--)
            m.cc.push(arguments[e]);
        }
        function cont() {
          return pass.apply(null, arguments), !0;
        }
        function register(e) {
          function inList(t) {
            for (var n = t; n; n = n.next) if (n.name == e) return !0;
            return !1;
          }
          var t = m.state;
          if (((m.marked = 'def'), t.context)) {
            if (inList(t.localVars)) return;
            t.localVars = { name: e, next: t.localVars };
          } else {
            if (inList(t.globalVars)) return;
            n.globalVars && (t.globalVars = { name: e, next: t.globalVars });
          }
        }
        function isModifier(e) {
          return (
            'public' == e ||
            'private' == e ||
            'protected' == e ||
            'abstract' == e ||
            'readonly' == e
          );
        }
        var v = { name: 'this', next: { name: 'arguments' } };
        function pushcontext() {
          (m.state.context = {
            prev: m.state.context,
            vars: m.state.localVars,
          }),
            (m.state.localVars = v);
        }
        function popcontext() {
          (m.state.localVars = m.state.context.vars),
            (m.state.context = m.state.context.prev);
        }
        function pushlex(e, t) {
          var n = function() {
            var n = m.state,
              r = n.indented;
            if ('stat' == n.lexical.type) r = n.lexical.indented;
            else
              for (var i = n.lexical; i && ')' == i.type && i.align; i = i.prev)
                r = i.indented;
            n.lexical = new JSLexical(
              r,
              m.stream.column(),
              e,
              null,
              n.lexical,
              t,
            );
          };
          return (n.lex = !0), n;
        }
        function poplex() {
          var e = m.state;
          e.lexical.prev &&
            (')' == e.lexical.type && (e.indented = e.lexical.indented),
            (e.lexical = e.lexical.prev));
        }
        poplex.lex = !0;
        function expect(e) {
          return function exp(t) {
            return t == e ? cont() : ';' == e ? pass() : cont(exp);
          };
        }
        function statement(e, t) {
          return 'var' == e
            ? cont(pushlex('vardef', t.length), vardef, expect(';'), poplex)
            : 'keyword a' == e
              ? cont(pushlex('form'), parenExpr, statement, poplex)
              : 'keyword b' == e
                ? cont(pushlex('form'), statement, poplex)
                : 'keyword d' == e
                  ? m.stream.match(/^\s*$/, !1)
                    ? cont()
                    : cont(
                        pushlex('stat'),
                        maybeexpression,
                        expect(';'),
                        poplex,
                      )
                  : 'debugger' == e
                    ? cont(expect(';'))
                    : '{' == e
                      ? cont(pushlex('}'), block, poplex)
                      : ';' == e
                        ? cont()
                        : 'if' == e
                          ? ('else' == m.state.lexical.info &&
                              m.state.cc[m.state.cc.length - 1] == poplex &&
                              m.state.cc.pop()(),
                            cont(
                              pushlex('form'),
                              parenExpr,
                              statement,
                              poplex,
                              maybeelse,
                            ))
                          : 'function' == e
                            ? cont(functiondef)
                            : 'for' == e
                              ? cont(
                                  pushlex('form'),
                                  forspec,
                                  statement,
                                  poplex,
                                )
                              : 'class' == e || (a && 'interface' == t)
                                ? ((m.marked = 'keyword'),
                                  cont(pushlex('form'), className, poplex))
                                : 'variable' == e
                                  ? a && 'type' == t
                                    ? ((m.marked = 'keyword'),
                                      cont(
                                        typeexpr,
                                        expect('operator'),
                                        typeexpr,
                                        expect(';'),
                                      ))
                                    : a && 'declare' == t
                                      ? ((m.marked = 'keyword'),
                                        cont(statement))
                                      : a &&
                                        ('module' == t || 'enum' == t) &&
                                        m.stream.match(/^\s*\w/, !1)
                                        ? ((m.marked = 'keyword'),
                                          cont(
                                            pushlex('form'),
                                            pattern,
                                            expect('{'),
                                            pushlex('}'),
                                            block,
                                            poplex,
                                            poplex,
                                          ))
                                        : a && 'namespace' == t
                                          ? ((m.marked = 'keyword'),
                                            cont(
                                              pushlex('form'),
                                              expression,
                                              block,
                                              poplex,
                                            ))
                                          : cont(pushlex('stat'), maybelabel)
                                  : 'switch' == e
                                    ? cont(
                                        pushlex('form'),
                                        parenExpr,
                                        expect('{'),
                                        pushlex('}', 'switch'),
                                        block,
                                        poplex,
                                        poplex,
                                      )
                                    : 'case' == e
                                      ? cont(expression, expect(':'))
                                      : 'default' == e
                                        ? cont(expect(':'))
                                        : 'catch' == e
                                          ? cont(
                                              pushlex('form'),
                                              pushcontext,
                                              expect('('),
                                              funarg,
                                              expect(')'),
                                              statement,
                                              poplex,
                                              popcontext,
                                            )
                                          : 'export' == e
                                            ? cont(
                                                pushlex('stat'),
                                                afterExport,
                                                poplex,
                                              )
                                            : 'import' == e
                                              ? cont(
                                                  pushlex('stat'),
                                                  afterImport,
                                                  poplex,
                                                )
                                              : 'async' == e
                                                ? cont(statement)
                                                : '@' == t
                                                  ? cont(expression, statement)
                                                  : pass(
                                                      pushlex('stat'),
                                                      expression,
                                                      expect(';'),
                                                      poplex,
                                                    );
        }
        function expression(e, t) {
          return expressionInner(e, t, !1);
        }
        function expressionNoComma(e, t) {
          return expressionInner(e, t, !0);
        }
        function parenExpr(e) {
          return '(' != e
            ? pass()
            : cont(pushlex(')'), expression, expect(')'), poplex);
        }
        function expressionInner(e, t, n) {
          if (m.state.fatArrowAt == m.stream.start) {
            var r = n ? arrowBodyNoComma : arrowBody;
            if ('(' == e)
              return cont(
                pushcontext,
                pushlex(')'),
                commasep(funarg, ')'),
                poplex,
                expect('=>'),
                r,
                popcontext,
              );
            if ('variable' == e)
              return pass(pushcontext, pattern, expect('=>'), r, popcontext);
          }
          var i = n ? maybeoperatorNoComma : maybeoperatorComma;
          return g.hasOwnProperty(e)
            ? cont(i)
            : 'function' == e
              ? cont(functiondef, i)
              : 'class' == e || (a && 'interface' == t)
                ? ((m.marked = 'keyword'),
                  cont(pushlex('form'), classExpression, poplex))
                : 'keyword c' == e || 'async' == e
                  ? cont(n ? expressionNoComma : expression)
                  : '(' == e
                    ? cont(
                        pushlex(')'),
                        maybeexpression,
                        expect(')'),
                        poplex,
                        i,
                      )
                    : 'operator' == e || 'spread' == e
                      ? cont(n ? expressionNoComma : expression)
                      : '[' == e
                        ? cont(pushlex(']'), arrayLiteral, poplex, i)
                        : '{' == e
                          ? contCommasep(objprop, '}', null, i)
                          : 'quasi' == e
                            ? pass(quasi, i)
                            : 'new' == e
                              ? cont(
                                  (function maybeTarget(e) {
                                    return function(t) {
                                      return '.' == t
                                        ? cont(e ? targetNoComma : target)
                                        : 'variable' == t && a
                                          ? cont(
                                              maybeTypeArgs,
                                              e
                                                ? maybeoperatorNoComma
                                                : maybeoperatorComma,
                                            )
                                          : pass(
                                              e
                                                ? expressionNoComma
                                                : expression,
                                            );
                                    };
                                  })(n),
                                )
                              : cont();
        }
        function maybeexpression(e) {
          return e.match(/[;\}\)\],]/) ? pass() : pass(expression);
        }
        function maybeoperatorComma(e, t) {
          return ',' == e ? cont(expression) : maybeoperatorNoComma(e, t, !1);
        }
        function maybeoperatorNoComma(e, t, n) {
          var r = 0 == n ? maybeoperatorComma : maybeoperatorNoComma,
            i = 0 == n ? expression : expressionNoComma;
          return '=>' == e
            ? cont(pushcontext, n ? arrowBodyNoComma : arrowBody, popcontext)
            : 'operator' == e
              ? /\+\+|--/.test(t) || (a && '!' == t)
                ? cont(r)
                : a && '<' == t && m.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
                  ? cont(pushlex('>'), commasep(typeexpr, '>'), poplex, r)
                  : '?' == t ? cont(expression, expect(':'), i) : cont(i)
              : 'quasi' == e
                ? pass(quasi, r)
                : ';' != e
                  ? '(' == e
                    ? contCommasep(expressionNoComma, ')', 'call', r)
                    : '.' == e
                      ? cont(property, r)
                      : '[' == e
                        ? cont(
                            pushlex(']'),
                            maybeexpression,
                            expect(']'),
                            poplex,
                            r,
                          )
                        : a && 'as' == t
                          ? ((m.marked = 'keyword'), cont(typeexpr, r))
                          : 'regexp' == e
                            ? ((m.state.lastType = m.marked = 'operator'),
                              m.stream.backUp(
                                m.stream.pos - m.stream.start - 1,
                              ),
                              cont(i))
                            : void 0
                  : void 0;
        }
        function quasi(e, t) {
          return 'quasi' != e
            ? pass()
            : '${' != t.slice(t.length - 2)
              ? cont(quasi)
              : cont(expression, continueQuasi);
        }
        function continueQuasi(e) {
          if ('}' == e)
            return (
              (m.marked = 'string-2'),
              (m.state.tokenize = tokenQuasi),
              cont(quasi)
            );
        }
        function arrowBody(e) {
          return (
            findFatArrow(m.stream, m.state),
            pass('{' == e ? statement : expression)
          );
        }
        function arrowBodyNoComma(e) {
          return (
            findFatArrow(m.stream, m.state),
            pass('{' == e ? statement : expressionNoComma)
          );
        }
        function target(e, t) {
          if ('target' == t)
            return (m.marked = 'keyword'), cont(maybeoperatorComma);
        }
        function targetNoComma(e, t) {
          if ('target' == t)
            return (m.marked = 'keyword'), cont(maybeoperatorNoComma);
        }
        function maybelabel(e) {
          return ':' == e
            ? cont(poplex, statement)
            : pass(maybeoperatorComma, expect(';'), poplex);
        }
        function property(e) {
          if ('variable' == e) return (m.marked = 'property'), cont();
        }
        function objprop(e, t) {
          if ('async' == e) return (m.marked = 'property'), cont(objprop);
          if ('variable' == e || 'keyword' == m.style) {
            if (((m.marked = 'property'), 'get' == t || 'set' == t))
              return cont(getterSetter);
            var n;
            return (
              a &&
                m.state.fatArrowAt == m.stream.start &&
                (n = m.stream.match(/^\s*:\s*/, !1)) &&
                (m.state.fatArrowAt = m.stream.pos + n[0].length),
              cont(afterprop)
            );
          }
          return 'number' == e || 'string' == e
            ? ((m.marked = o ? 'property' : m.style + ' property'),
              cont(afterprop))
            : 'jsonld-keyword' == e
              ? cont(afterprop)
              : a && isModifier(t)
                ? ((m.marked = 'keyword'), cont(objprop))
                : '[' == e
                  ? cont(expression, maybetype, expect(']'), afterprop)
                  : 'spread' == e
                    ? cont(expressionNoComma, afterprop)
                    : '*' == t
                      ? ((m.marked = 'keyword'), cont(objprop))
                      : ':' == e ? pass(afterprop) : void 0;
        }
        function getterSetter(e) {
          return 'variable' != e
            ? pass(afterprop)
            : ((m.marked = 'property'), cont(functiondef));
        }
        function afterprop(e) {
          return ':' == e
            ? cont(expressionNoComma)
            : '(' == e ? pass(functiondef) : void 0;
        }
        function commasep(e, t, n) {
          function proceed(r, i) {
            if (n ? n.indexOf(r) > -1 : ',' == r) {
              var o = m.state.lexical;
              return (
                'call' == o.info && (o.pos = (o.pos || 0) + 1),
                cont(function(n, r) {
                  return n == t || r == t ? pass() : pass(e);
                }, proceed)
              );
            }
            return r == t || i == t ? cont() : cont(expect(t));
          }
          return function(n, r) {
            return n == t || r == t ? cont() : pass(e, proceed);
          };
        }
        function contCommasep(e, t, n) {
          for (var r = 3; r < arguments.length; r++) m.cc.push(arguments[r]);
          return cont(pushlex(t, n), commasep(e, t), poplex);
        }
        function block(e) {
          return '}' == e ? cont() : pass(statement, block);
        }
        function maybetype(e, t) {
          if (a) {
            if (':' == e) return cont(typeexpr);
            if ('?' == t) return cont(maybetype);
          }
        }
        function mayberettype(e) {
          if (a && ':' == e)
            return m.stream.match(/^\s*\w+\s+is\b/, !1)
              ? cont(expression, isKW, typeexpr)
              : cont(typeexpr);
        }
        function isKW(e, t) {
          if ('is' == t) return (m.marked = 'keyword'), cont();
        }
        function typeexpr(e, t) {
          return 'variable' == e || 'void' == t
            ? 'keyof' == t
              ? ((m.marked = 'keyword'), cont(typeexpr))
              : ((m.marked = 'type'), cont(afterType))
            : 'string' == e || 'number' == e || 'atom' == e
              ? cont(afterType)
              : '[' == e
                ? cont(
                    pushlex(']'),
                    commasep(typeexpr, ']', ','),
                    poplex,
                    afterType,
                  )
                : '{' == e
                  ? cont(
                      pushlex('}'),
                      commasep(typeprop, '}', ',;'),
                      poplex,
                      afterType,
                    )
                  : '(' == e
                    ? cont(commasep(typearg, ')'), maybeReturnType)
                    : void 0;
        }
        function maybeReturnType(e) {
          if ('=>' == e) return cont(typeexpr);
        }
        function typeprop(e, t) {
          return 'variable' == e || 'keyword' == m.style
            ? ((m.marked = 'property'), cont(typeprop))
            : '?' == t
              ? cont(typeprop)
              : ':' == e
                ? cont(typeexpr)
                : '[' == e
                  ? cont(expression, maybetype, expect(']'), typeprop)
                  : void 0;
        }
        function typearg(e) {
          return 'variable' == e
            ? cont(typearg)
            : ':' == e ? cont(typeexpr) : void 0;
        }
        function afterType(e, t) {
          return '<' == t
            ? cont(pushlex('>'), commasep(typeexpr, '>'), poplex, afterType)
            : '|' == t || '.' == e
              ? cont(typeexpr)
              : '[' == e
                ? cont(expect(']'), afterType)
                : 'extends' == t || 'implements' == t
                  ? ((m.marked = 'keyword'), cont(typeexpr))
                  : void 0;
        }
        function maybeTypeArgs(e, t) {
          if ('<' == t)
            return cont(
              pushlex('>'),
              commasep(typeexpr, '>'),
              poplex,
              afterType,
            );
        }
        function typeparam() {
          return pass(typeexpr, maybeTypeDefault);
        }
        function maybeTypeDefault(e, t) {
          if ('=' == t) return cont(typeexpr);
        }
        function vardef() {
          return pass(pattern, maybetype, maybeAssign, vardefCont);
        }
        function pattern(e, t) {
          return a && isModifier(t)
            ? ((m.marked = 'keyword'), cont(pattern))
            : 'variable' == e
              ? (register(t), cont())
              : 'spread' == e
                ? cont(pattern)
                : '[' == e
                  ? contCommasep(pattern, ']')
                  : '{' == e ? contCommasep(proppattern, '}') : void 0;
        }
        function proppattern(e, t) {
          return 'variable' != e || m.stream.match(/^\s*:/, !1)
            ? ('variable' == e && (m.marked = 'property'),
              'spread' == e
                ? cont(pattern)
                : '}' == e ? pass() : cont(expect(':'), pattern, maybeAssign))
            : (register(t), cont(maybeAssign));
        }
        function maybeAssign(e, t) {
          if ('=' == t) return cont(expressionNoComma);
        }
        function vardefCont(e) {
          if (',' == e) return cont(vardef);
        }
        function maybeelse(e, t) {
          if ('keyword b' == e && 'else' == t)
            return cont(pushlex('form', 'else'), statement, poplex);
        }
        function forspec(e) {
          if ('(' == e)
            return cont(pushlex(')'), forspec1, expect(')'), poplex);
        }
        function forspec1(e) {
          return 'var' == e
            ? cont(vardef, expect(';'), forspec2)
            : ';' == e
              ? cont(forspec2)
              : 'variable' == e
                ? cont(formaybeinof)
                : pass(expression, expect(';'), forspec2);
        }
        function formaybeinof(e, t) {
          return 'in' == t || 'of' == t
            ? ((m.marked = 'keyword'), cont(expression))
            : cont(maybeoperatorComma, forspec2);
        }
        function forspec2(e, t) {
          return ';' == e
            ? cont(forspec3)
            : 'in' == t || 'of' == t
              ? ((m.marked = 'keyword'), cont(expression))
              : pass(expression, expect(';'), forspec3);
        }
        function forspec3(e) {
          ')' != e && cont(expression);
        }
        function functiondef(e, t) {
          return '*' == t
            ? ((m.marked = 'keyword'), cont(functiondef))
            : 'variable' == e
              ? (register(t), cont(functiondef))
              : '(' == e
                ? cont(
                    pushcontext,
                    pushlex(')'),
                    commasep(funarg, ')'),
                    poplex,
                    mayberettype,
                    statement,
                    popcontext,
                  )
                : a && '<' == t
                  ? cont(
                      pushlex('>'),
                      commasep(typeparam, '>'),
                      poplex,
                      functiondef,
                    )
                  : void 0;
        }
        function funarg(e, t) {
          return (
            '@' == t && cont(expression, funarg),
            'spread' == e
              ? cont(funarg)
              : a && isModifier(t)
                ? ((m.marked = 'keyword'), cont(funarg))
                : pass(pattern, maybetype, maybeAssign)
          );
        }
        function classExpression(e, t) {
          return 'variable' == e ? className(e, t) : classNameAfter(e, t);
        }
        function className(e, t) {
          if ('variable' == e) return register(t), cont(classNameAfter);
        }
        function classNameAfter(e, t) {
          return '<' == t
            ? cont(
                pushlex('>'),
                commasep(typeparam, '>'),
                poplex,
                classNameAfter,
              )
            : 'extends' == t || 'implements' == t || (a && ',' == e)
              ? cont(a ? typeexpr : expression, classNameAfter)
              : '{' == e ? cont(pushlex('}'), classBody, poplex) : void 0;
        }
        function classBody(e, t) {
          return 'async' == e ||
            ('variable' == e &&
              ('static' == t ||
                'get' == t ||
                'set' == t ||
                (a && isModifier(t))) &&
              m.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((m.marked = 'keyword'), cont(classBody))
            : 'variable' == e || 'keyword' == m.style
              ? ((m.marked = 'property'),
                cont(a ? classfield : functiondef, classBody))
              : '[' == e
                ? cont(
                    expression,
                    maybetype,
                    expect(']'),
                    a ? classfield : functiondef,
                    classBody,
                  )
                : '*' == t
                  ? ((m.marked = 'keyword'), cont(classBody))
                  : ';' == e
                    ? cont(classBody)
                    : '}' == e
                      ? cont()
                      : '@' == t ? cont(expression, classBody) : void 0;
        }
        function classfield(e, t) {
          return '?' == t
            ? cont(classfield)
            : ':' == e
              ? cont(typeexpr, maybeAssign)
              : '=' == t ? cont(expressionNoComma) : pass(functiondef);
        }
        function afterExport(e, t) {
          return '*' == t
            ? ((m.marked = 'keyword'), cont(maybeFrom, expect(';')))
            : 'default' == t
              ? ((m.marked = 'keyword'), cont(expression, expect(';')))
              : '{' == e
                ? cont(commasep(exportField, '}'), maybeFrom, expect(';'))
                : pass(statement);
        }
        function exportField(e, t) {
          return 'as' == t
            ? ((m.marked = 'keyword'), cont(expect('variable')))
            : 'variable' == e ? pass(expressionNoComma, exportField) : void 0;
        }
        function afterImport(e) {
          return 'string' == e
            ? cont()
            : pass(importSpec, maybeMoreImports, maybeFrom);
        }
        function importSpec(e, t) {
          return '{' == e
            ? contCommasep(importSpec, '}')
            : ('variable' == e && register(t),
              '*' == t && (m.marked = 'keyword'),
              cont(maybeAs));
        }
        function maybeMoreImports(e) {
          if (',' == e) return cont(importSpec, maybeMoreImports);
        }
        function maybeAs(e, t) {
          if ('as' == t) return (m.marked = 'keyword'), cont(importSpec);
        }
        function maybeFrom(e, t) {
          if ('from' == t) return (m.marked = 'keyword'), cont(expression);
        }
        function arrayLiteral(e) {
          return ']' == e ? cont() : pass(commasep(expressionNoComma, ']'));
        }
        function expressionAllowed(e, t, n) {
          return (
            (t.tokenize == tokenBase &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                t.lastType,
              )) ||
            ('quasi' == t.lastType &&
              /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
          );
        }
        return {
          startState: function(e) {
            var t = {
              tokenize: tokenBase,
              lastType: 'sof',
              cc: [],
              lexical: new JSLexical((e || 0) - r, 0, 'block', !1),
              localVars: n.localVars,
              context: n.localVars && { vars: n.localVars },
              indented: e || 0,
            };
            return (
              n.globalVars &&
                'object' == typeof n.globalVars &&
                (t.globalVars = n.globalVars),
              t
            );
          },
          token: function(e, t) {
            if (
              (e.sol() &&
                (t.lexical.hasOwnProperty('align') || (t.lexical.align = !1),
                (t.indented = e.indentation()),
                findFatArrow(e, t)),
              t.tokenize != tokenComment && e.eatSpace())
            )
              return null;
            var n = t.tokenize(e, t);
            return 'comment' == p
              ? n
              : ((t.lastType =
                  'operator' != p || ('++' != h && '--' != h) ? p : 'incdec'),
                (function parseJS(e, t, n, r, i) {
                  var o = e.cc;
                  for (
                    m.state = e,
                      m.stream = i,
                      m.marked = null,
                      m.cc = o,
                      m.style = t,
                      e.lexical.hasOwnProperty('align') ||
                        (e.lexical.align = !0);
                    ;

                  )
                    if (
                      (o.length ? o.pop() : s ? expression : statement)(n, r)
                    ) {
                      for (; o.length && o[o.length - 1].lex; ) o.pop()();
                      return m.marked
                        ? m.marked
                        : 'variable' == n && inScope(e, r) ? 'variable-2' : t;
                    }
                })(t, n, p, h, e));
          },
          indent: function(t, o) {
            if (t.tokenize == tokenComment) return e.Pass;
            if (t.tokenize != tokenBase) return 0;
            var s,
              a = o && o.charAt(0),
              l = t.lexical;
            if (!/^\s*else\b/.test(o))
              for (var c = t.cc.length - 1; c >= 0; --c) {
                var d = t.cc[c];
                if (d == poplex) l = l.prev;
                else if (d != maybeelse) break;
              }
            for (
              ;
              ('stat' == l.type || 'form' == l.type) &&
              ('}' == a ||
                ((s = t.cc[t.cc.length - 1]) &&
                  (s == maybeoperatorComma || s == maybeoperatorNoComma) &&
                  !/^[,\.=+\-*:?[\(]/.test(o)));

            )
              l = l.prev;
            i && ')' == l.type && 'stat' == l.prev.type && (l = l.prev);
            var p = l.type,
              h = a == p;
            return 'vardef' == p
              ? l.indented +
                  ('operator' == t.lastType || ',' == t.lastType
                    ? l.info + 1
                    : 0)
              : 'form' == p && '{' == a
                ? l.indented
                : 'form' == p
                  ? l.indented + r
                  : 'stat' == p
                    ? l.indented +
                      ((function isContinuedStatement(e, t) {
                        return (
                          'operator' == e.lastType ||
                          ',' == e.lastType ||
                          u.test(t.charAt(0)) ||
                          /[,.]/.test(t.charAt(0))
                        );
                      })(t, o)
                        ? i || r
                        : 0)
                    : 'switch' != l.info || h || 0 == n.doubleIndentSwitch
                      ? l.align
                        ? l.column + (h ? 0 : 1)
                        : l.indented + (h ? 0 : r)
                      : l.indented +
                        (/^(?:case|default)\b/.test(o) ? r : 2 * r);
          },
          electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
          blockCommentStart: s ? null : '/*',
          blockCommentEnd: s ? null : '*/',
          blockCommentContinue: s ? null : ' * ',
          lineComment: s ? null : '//',
          fold: 'brace',
          closeBrackets: '()[]{}\'\'""``',
          helperType: s ? 'json' : 'javascript',
          jsonldMode: o,
          jsonMode: s,
          expressionAllowed: expressionAllowed,
          skipExpression: function(e) {
            var t = e.cc[e.cc.length - 1];
            (t != expression && t != expressionNoComma) || e.cc.pop();
          },
        };
      }),
        e.registerHelper('wordChars', 'javascript', /[\w$]/),
        e.defineMIME('text/javascript', 'javascript'),
        e.defineMIME('text/ecmascript', 'javascript'),
        e.defineMIME('application/javascript', 'javascript'),
        e.defineMIME('application/x-javascript', 'javascript'),
        e.defineMIME('application/ecmascript', 'javascript'),
        e.defineMIME('application/json', { name: 'javascript', json: !0 }),
        e.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
        e.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
        e.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
        e.defineMIME('application/typescript', {
          name: 'javascript',
          typescript: !0,
        });
    })(n(1471));
  },
  1476: function(e, t, n) {
    var r = n(1477);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var i = { hmr: !0 };
    i.transform = void 0;
    n(643)(r, i);
    r.locals && (e.exports = r.locals);
  },
  1477: function(e, t, n) {
    (e.exports = n(642)(void 0)).push([
      e.i,
      "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
      '',
    ]);
  },
  1478: function(e, t, n) {
    var r = n(1479);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var i = { hmr: !0 };
    i.transform = void 0;
    n(643)(r, i);
    r.locals && (e.exports = r.locals);
  },
  1479: function(e, t, n) {
    (e.exports = n(642)(void 0)).push([
      e.i,
      '/*\n\n    Name:       Base16 Default Light\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }\n.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }\n.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }\n\n.cm-s-base16-light span.cm-comment { color: #8f5536; }\n.cm-s-base16-light span.cm-atom { color: #aa759f; }\n.cm-s-base16-light span.cm-number { color: #aa759f; }\n\n.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }\n.cm-s-base16-light span.cm-keyword { color: #ac4142; }\n.cm-s-base16-light span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-light span.cm-variable { color: #90a959; }\n.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-light span.cm-def { color: #d28445; }\n.cm-s-base16-light span.cm-bracket { color: #202020; }\n.cm-s-base16-light span.cm-tag { color: #ac4142; }\n.cm-s-base16-light span.cm-link { color: #aa759f; }\n.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }\n\n.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }\n.cm-s-base16-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
      '',
    ]);
  },
});
