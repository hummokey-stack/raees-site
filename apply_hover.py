import sys
import re

path = 'C:/Users/KEN MASTER/RAEES/raees-site/src/App.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# For EducationCard
content = content.replace(
    '''function EducationCard() {
  return (
    <div style={{''',
    '''function EducationCard() {
  return (
    <div className="hover-card" style={{'''
)

# For TypewriterCard
content = content.replace(
    '''function TypewriterCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TYPEWRITER_MESSAGES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{''',
    '''function TypewriterCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TYPEWRITER_MESSAGES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hover-card" style={{'''
)

# For ProtocolCard
content = content.replace(
    '''function ProtocolCard() {
  return (
    <div style={{''',
    '''function ProtocolCard() {
  return (
    <div className="hover-card" style={{'''
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Added hover-card classes!")
