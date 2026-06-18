import sys
path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    '// Font Awesome 4 helper\nconst Fa = ({ icon, style = {}, className = \'\' }) => (\n  <i className={`fa fa-${icon} ${className}`} style={style} aria-hidden="true" />\n)',
    'import { ArrowRight, Phone, MessageCircle, Facebook, ChevronDown, Star, Shield, Users, TrendingUp, Check, Menu, X } from \'lucide-react\''
)
c = c.replace('<Fa icon="bars" style={{ fontSize: "18px" }} />', '<Menu size={20} />')
c = c.replace('<Fa icon="times" style={{ fontSize: "18px" }} />', '<X size={20} />')
c = c.replace('<Fa icon="times" style={{ fontSize: "22px" }} />', '<X size={24} />')
c = c.replace('<Fa icon="whatsapp" style={{ fontSize: "16px" }} />', '<MessageCircle size={16} />')
c = c.replace('<Fa icon="chevron-down" style={{ fontSize: "14px" }} />', '<ChevronDown size={16} />')
c = c.replace('<Fa icon="star" style={{ fontSize: "14px", color: "#D9A84F" }} />', '<Star size={14} color="#D9A84F" />')
c = c.replace('<Fa icon="users" style={{ fontSize: "14px", color: "#D9A84F" }} />', '<Users size={14} color="#D9A84F" />')
c = c.replace('<Fa icon="line-chart" style={{ fontSize: "14px", color: "#D9A84F" }} />', '<TrendingUp size={14} color="#D9A84F" />')
c = c.replace('<Fa icon="check" style={{ fontSize: "10px", color: "#D9A84F" }} />', '<Check size={10} color="#D9A84F" />')
c = c.replace('<Fa icon="check" style={{ fontSize: "10px", color: "#6E5440" }} />', '<Check size={10} color="#6E5440" />')
c = c.replace('<Fa icon="whatsapp" style={{ fontSize: "15px" }} />', '<MessageCircle size={15} />')
c = c.replace('<Fa icon="phone" style={{ fontSize: "14px", color: "#D9A84F" }} />', '<Phone size={14} color="#D9A84F" />')
c = c.replace('<Fa icon="facebook" style={{ fontSize: "14px", color: "#D9A84F" }} />', '<Facebook size={14} color="#D9A84F" />')
c = c.replace("{ icon: 'book',", "{ icon: '📚',")
c = c.replace("{ icon: 'briefcase',", "{ icon: '💼',")
c = c.replace("{ icon: 'globe',", "{ icon: '🌍',")

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print('Reverted icon changes successfully.')
