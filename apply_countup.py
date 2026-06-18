import sys
import re

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace 50% in FemmeScolarisee (around line 1075)
content = content.replace(
    '''              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#6E5440', lineHeight: 1 }}>
                50%
              </span>''',
    '''              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#6E5440', lineHeight: 1 }}>
                <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
              </span>'''
)

# Replace 100% in JeunesseSociete (around line 1182)
content = content.replace(
    '''              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#6E5440', lineHeight: 1 }}>
                100%
              </span>''',
    '''              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#6E5440', lineHeight: 1 }}>
                <CountUp end={100} suffix="%" enableScrollSpy scrollSpyOnce />
              </span>'''
)

# Replace 500+, 25+, 100% in EducationShowcase if they exist
content = content.replace(
    "{ value: '500+', label: 'Étudiants soutenus' }",
    "{ value: <CountUp end={500} suffix=\"+\" enableScrollSpy scrollSpyOnce />, label: 'Étudiants soutenus' }"
)
content = content.replace(
    "{ value: '25+', label: 'Mentors actifs' }",
    "{ value: <CountUp end={25} suffix=\"+\" enableScrollSpy scrollSpyOnce />, label: 'Mentors actifs' }"
)
content = content.replace(
    "{ value: '100%', label: 'Engagement éducatif' }",
    "{ value: <CountUp end={100} suffix=\"%\" enableScrollSpy scrollSpyOnce />, label: 'Engagement éducatif' }"
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated App.jsx with CountUp!")
