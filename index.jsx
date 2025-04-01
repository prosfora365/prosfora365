
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram } from "lucide-react";

export default function Prosfora365Home() {
  return (
    <div className="p-6 grid gap-6 max-w-3xl mx-auto">
      {/* Mini Banner */}
      <div className="bg-red-500 text-white text-sm font-semibold text-center py-2 rounded-xl">
        📢 Νέες αφίξεις κάθε εβδομάδα – μέχρι εξαντλήσεως!
      </div>

      <h1 className="text-3xl font-bold text-center">Prosfora365.gr</h1>
      <p className="text-lg text-center text-muted-foreground">
        Καλωσήρθες στις πιο έξυπνες προσφορές της καθημερινότητας! Κάθε εβδομάδα νέα combo sets & μοναδικά προϊόντα για το σπίτι και τον μάστορα.
      </p>

      <Card className="rounded-2xl shadow">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🔄 Η φιλοσοφία μας</h2>
          <p className="text-sm text-muted-foreground">
            Στο Prosfora365.gr φέρνουμε stock προϊόντα & παρτίδες από Ελλάδα και εξωτερικό. Τα παρουσιάζουμε σε combo πακέτα με νόημα και χρήσιμη αξία – όχι απλά φθηνά. Δεν έχουμε σταθερά είδη. Όταν εξαντληθεί, έφυγε. Μένουμε αυθεντικοί, απλοί και τίμιοι.
          </p>
        </CardContent>
      </Card>

      {/* Demo Combo */}
      <Card className="rounded-2xl shadow border border-dashed">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🧺 Demo Combo: "Καθάρισέ το"</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Σίδερο ατμού</li>
            <li>Spray καθαρισμού</li>
            <li>Πανί μικροϊνών</li>
          </ul>
          <p className="text-sm mt-2">Τιμή demo: <strong>19.90€</strong></p>
          <Button className="mt-4 w-full" disabled>Εξαντλήθηκε</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow bg-muted">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">📦 Προσεχώς νέα παλέτα</h2>
          <p className="text-sm">
            Ετοιμαζόμαστε να παραλάβουμε νέα παρτίδα με mix προϊόντων. Μόλις φτάσουν, θα ανέβουν εδώ με φωτογραφίες & combo sets.
          </p>
          <Button className="mt-4 w-full" disabled>Έρχεται σύντομα...</Button>
        </CardContent>
      </Card>

      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-2">📬 Ενημερώσου πρώτος</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Βάλε το email σου για να λαμβάνεις τις νέες προσφορές & παρτίδες πριν γίνουν sold out.
        </p>
        <div className="flex gap-2">
          <Input placeholder="Email σου" />
          <Button>Εγγραφή</Button>
        </div>
      </div>

      <div className="flex flex-col items-center text-sm text-muted-foreground gap-2 mt-6">
        <p>Ακολούθησέ μας:</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/prosfora365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
            <Facebook size={18} /> Facebook
          </a>
          <a href="https://www.instagram.com/prosfores365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
            <Instagram size={18} /> Instagram
          </a>
        </div>
        <p className="mt-2">Τηλ. επικοινωνίας: 6942806507</p>
        <p>Email: prosfora365@gmail.com</p>
        <p className="text-xs text-center mt-4 text-muted-foreground">Αποστολή σε όλη την Ελλάδα • Αντικαταβολή διαθέσιμη • Κάθε προϊόν μέχρι εξαντλήσεως</p>
      </div>
    </div>
  );
}
