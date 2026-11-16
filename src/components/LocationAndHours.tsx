import { MapPin, Clock, Ticket, ExternalLink } from 'lucide-react';

export function LocationAndHours() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Pataleshwar+Cave+Temple,+Jangali+Maharaj+Rd,+Revenue+Colony,+Shivajinagar,+Pune,+Maharashtra+411005";

  return (
    <section id="location-hours" className="py-16 border-t border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Simple Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
            Visitor Information
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Location & Opening Hours
          </h2>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Plan your visit to the 8th-century rock-cut sanctuary in Shivajinagar, Pune.
          </p>
        </div>

        {/* Clean, Simple Unified Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Address</span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed font-reading">
                Pataleshwar Cave Temple, Jangali Maharaj (JM) Road, Shivajinagar, Pune, Maharashtra 411005
              </p>
            </div>

            {/* 2. Opening Hours */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Opening Hours</span>
              </div>
              <p className="text-sm text-stone-900 font-semibold font-mono">
                08:00 AM – 05:30 PM
              </p>
              <p className="text-xs text-stone-600">
                Open daily (Monday to Sunday)
              </p>
            </div>

            {/* 3. Entry Fee */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-700">
                <Ticket className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Admission</span>
              </div>
              <p className="text-sm text-emerald-700 font-semibold">
                Free Entry
              </p>
              <p className="text-xs text-stone-600">
                No tickets or advance booking required
              </p>
            </div>
          </div>

          {/* Simple Direct Google Maps Action */}
          <div className="pt-6 border-t border-stone-200 flex justify-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors shadow-xs"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
