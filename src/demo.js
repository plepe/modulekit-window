import modulekitLang from 'modulekit-lang'
import Window from './Window'

window.onload = () => {
  modulekitLang.set(null, {}, (err) => {
    if (err) { console.error(err) }

    const w = new Window({
      title: 'Demo'
    })

    w.show()
  })
}
