import { Modal } from "@/components"
import { useEffect } from "react"
import { RiCheckboxCircleLine } from "react-icons/ri"
import { useRegisterSW } from "virtual:pwa-register/react"

function ServiceWorkerModal() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r)
    },
    onRegisterError(error) {
      console.log("SW registration error", error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => close(), 2000)
    return () => clearTimeout(timer)
  }, [offlineReady])

  return (
    <Modal renderWhen={offlineReady || needRefresh}>
      {offlineReady ? (
        <div className="flex items-center">
          <RiCheckboxCircleLine size={20} />
          <span className="ml-2">Available offline</span>
        </div>
      ) : (
        <span>New content available, click on reload button to update.</span>
      )}
      {needRefresh && (
        <button
          className="border px-3 py-2 rounded-xl"
          onClick={() => updateServiceWorker(true)}
        >
          Reload
        </button>
      )}
    </Modal>
  )
}

export default ServiceWorkerModal
