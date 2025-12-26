import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react" // İkonları sonra ekleyeceğiz ama şimdilik dursun



export default function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Donna Bianca
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Hayalinizdeki gelinliği tasarlıyoruz. Modern çizgiler, klasik dokunuşlar.
        </p>
        
        <div className="flex gap-4 justify-center">
          {/* İşte shadcn'den gelen hazır Buton */}
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg">
            Koleksiyonu İncele
          </Button>
          
          <Button variant="outline" size="lg">
            Randevu Al
          </Button>
        </div>12
      </div>
    </div>
  )
}