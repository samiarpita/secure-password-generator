import { ShieldCheck, Zap, ClipboardCopy } from "lucide-react";
function Features() {
  return (
    <section className="container py-5">
      <div className="row text-center">

        <div className="col-md-4">
          <ShieldCheck size={25} className="mb-3 text-primary" />
          <h3>Secure</h3>
          <p>Strong encryption and random generation.</p>
        </div>

        <div className="col-md-4">
          <Zap size={25} className="mb-3 text-warning" />
          <h3>Fast</h3>
          <p>Generate passwords instantly.</p>
        </div>

        <div className="col-md-4">
          <ClipboardCopy size={25} className="mb-3 text-success" />
          <h3>Easy Copy</h3>
          <p>Copy passwords with one click.</p>
        </div>

      </div>
    </section>
  );
}

export default Features;