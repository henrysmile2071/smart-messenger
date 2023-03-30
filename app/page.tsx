import { BeakerIcon, ExclamationTriangleIcon, BoltIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Smart Messenger</h1>
      
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <BeakerIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain to me the meaning of living&quot;</p>
            <p className="infoText">&quot;Is Henry a good candidate for my team ?&quot;</p>
            <p className="infoText">&quot;How do I improve my coding abilities ?&quot;</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities
            </h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Choose ChatGPT model to use</p>
            <p className="infoText">Messages are stored  in Firebase&apos;s Filestore</p>
            <p className="infoText">Hot Toast notificaitons when Messenger is thinking!</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5 ">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect info</p>
            <p className="infoText">Knowledge are acquired from google search results</p>
            <p className="infoText">May occasionally generate inapropriate content</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage