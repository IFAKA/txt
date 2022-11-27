import { Modal, Render } from "@/components"
import { AnimatePresence } from "framer-motion"
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

  useEffect(() => {
    needRefresh && updateServiceWorker(true)
  }, [needRefresh])

  return (
    <Render when={offlineReady}>
      <Modal>
        <div className="flex items-center">
          <RiCheckboxCircleLine size={20} />
          <span className="ml-2">Available offline</span>
        </div>
      </Modal>
    </Render>
  )
}

export default ServiceWorkerModal
