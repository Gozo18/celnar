import { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
}

const KontaktPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-cairo">Kontakt</h1>
        <p className="text-muted-foreground">
          Rádi vás přivítáme v našem vinařství.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-semibold mb-1">Adresa</h2>
              <p className="text-muted-foreground">
                Nová 626
                <br />
                691 25 Vranovice
                <br />
                Česká republika
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-semibold mb-1">Telefon</h2>
              <a
                href="tel:+420723467493"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +420 723 467 493
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-semibold mb-1">E-mail</h2>
              <a
                href="mailto:info@vinarstvicelnar.cz"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                info@vinarstvicelnar.cz
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-semibold mb-1">Otevírací doba</h2>
              <div className="text-muted-foreground space-y-0.5">
                <p>Pondělí – Pátek: 9:00 – 17:00</p>
                <p>Sobota - Neděle: 10:00 – 17:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border shadow-sm min-h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=Vina%C5%99stv%C3%AD+Celnar%2C+Nov%C3%A1+626%2C+691+25+Vranovice&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa – Vinařství Celnar, Nová 626, 691 25 Vranovice"
          />
        </div>
      </div>
    </div>
  )
}

export default KontaktPage
