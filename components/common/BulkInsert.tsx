const BulkInsert: React.FC<{showBulk: boolean, setShowBulk: Function}> = ({showBulk, setShowBulk}) => {

  const toggleBulkModal = (state: boolean): void => {
    document.body.classList.toggle('openModal')
    setShowBulk(state)
  }

  if(showBulk) {
    return (
      <>
        <div className="absolute top-0 left-0">
          <div className="w-full z-[1000]">
            <div className="h-80 absolute">
              <div>
                <div className="fixed inset-0 z-10 bg-secondary-700/50"></div>
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
                  <div className="mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-xl">
                    <div className="relative p-6">
                      <button type="button" onClick={() => toggleBulkModal(false)} className="absolute top-4 right-4 rounded-lg p-1 text-center font-medium text-secondary-500 transition-all hover:bg-secondary-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </button>
                      <h3 className="text-lg font-medium text-secondary-900">Modal title</h3>
                      <div className="mt-2 text-sm text-secondary-500">This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height.</div>
                    </div>
                    <div className="flex justify-end gap-3 bg-secondary-50 px-6 py-3">
                      <button type="button" onClick={() => toggleBulkModal(false)} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400">Cancel</button>
                      <button type="button" onClick={() => toggleBulkModal(false)} className="bg-[var(--bl-link)] rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Confirm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[100vh] absolute top-0 left-0 bg-[rgba(0,0,0,.5)]" id="backOverlay"></div>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }
  
}

export default BulkInsert