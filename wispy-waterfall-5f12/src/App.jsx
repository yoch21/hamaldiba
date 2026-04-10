import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img src="/logo.png" alt="חמל דיבה לוגו" style={{ width: '60%' }} />
      <h1>ברוכים הבאים לחמ״ל דיבה</h1>
      <ul className="links-list">
        <li><a href="/join">להצטרפות אלינו</a></li>
        <li><a href="https://beactive.co.il/project/89879">לתרומה למלחמה על האמת</a></li>
      </ul>
    </div>
  )
}

export default App
