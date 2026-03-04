import { LogOut, User, Globe, Mail, Phone, MapPin, Building2, Calendar, ClipboardCheck, Briefcase, CreditCard, History, PlusCircle } from 'lucide-react';
import EmployerLogo from './assets/st-engineering-logo.png';

const EmployerDashboard = () => {
    const companyDetails = {
        employerName: "Mr Lim",
        parentCompany: "ST Engineering",
        contactEmail: "chinhu.lim@stengg.com",
        contactPhone: "+65 6722 1818",
        website: "https://www.stengg.com/",
        domain: "Aerospace, Electronics, Land Systems and Marine",
        companySize: "23,000+ Employees",
        estDate: "1967",
        uen: "196700130E",
        directorName: "Lim Chin Hu",
        directorEmail: "lim.ch@stengg.com",
        address: "1 Ang Mo Kio Electronics Park Road",
        city: "Singapore",
        country: "Singapore",
    };

    const navOptions = [
        { label: "Purchased Candidates Profiles", icon: <User className="w-5 h-5" />, color: "bg-blue-600 hover:bg-blue-700" },
        { label: "Posted Jobs", icon: <Briefcase className="w-5 h-5" />, color: "bg-indigo-600 hover:bg-indigo-700" },
        { label: "Create New Job", icon: <PlusCircle className="w-5 h-5" />, color: "bg-cyan-600 hover:bg-cyan-700" },
        { label: "My Transactions", icon: <History className="w-5 h-5" />, color: "bg-sky-600 hover:bg-sky-700" },
        { label: "Credit Card Management", icon: <CreditCard className="w-5 h-5" />, color: "bg-blue-800 hover:bg-blue-900" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-outfit text-slate-900 pb-12">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10 glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-brand-900 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <span className="text-white font-bold text-xl italic">DH</span>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-brand-950">
                            Deep HR <span className="text-brand-600">Match</span>
                        </h1>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-all duration-300 shadow-sm">
                        <LogOut className="w-4 h-4" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                {/* Greeting Section */}
                <section className="mb-12">
                    <h2 className="font-cursive text-5xl md:text-6xl text-brand-900 mb-4 animate-in fade-in slide-in-from-left-4 duration-700">
                        Good Day {companyDetails.employerName} from {companyDetails.parentCompany}
                    </h2>
                    <p className="text-slate-500 text-xl font-light">What would you like to do today?</p>
                </section>

                {/* Action Grid */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {navOptions.map((option, idx) => (
                            <button
                                key={idx}
                                className={`${option.color} text-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 min-h-[160px]`}
                            >
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    {option.icon}
                                </div>
                                <span className="font-semibold text-sm leading-tight">{option.label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Company Details */}
                <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                    <div className="bg-brand-900 px-8 py-6 flex items-center justify-between">
                        <h3 className="text-white text-xl font-bold flex items-center gap-2">
                            <Building2 className="w-6 h-6 text-brand-300" />
                            Company Details
                        </h3>
                        <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                            <span className="text-brand-100 text-xs font-semibold uppercase tracking-wider">Verified Employer</span>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Logo and Name */}
                            <div className="lg:w-1/4 flex flex-col items-center space-y-6">
                                <div className="w-48 h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center p-4 group hover:border-brand-300 transition-colors overflow-hidden">
                                    <img src={EmployerLogo} alt="ST Engineering Logo" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-2xl font-bold text-slate-900">{companyDetails.parentCompany}</h4>
                                    <p className="text-brand-600 font-medium">Global Technology & Engineering</p>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <InfoItem icon={<User className="w-5 h-5" />} label="Employer Name" value={companyDetails.employerName} />
                                <InfoItem icon={<Building2 className="w-5 h-5" />} label="Parent Company" value={companyDetails.parentCompany} />
                                <InfoItem icon={<Mail className="w-5 h-5" />} label="Contact Email" value={companyDetails.contactEmail} />
                                <InfoItem icon={<Phone className="w-5 h-5" />} label="Contact Phone" value={companyDetails.contactPhone} />
                                <InfoItem icon={<Globe className="w-5 h-5" />} label="Website" value={companyDetails.website} isLink />
                                <InfoItem icon={<Briefcase className="w-5 h-5" />} label="Domain/Industry" value={companyDetails.domain} />
                                <InfoItem icon={<User className="w-5 h-5" />} label="Company Size" value={companyDetails.companySize} />
                                <InfoItem icon={<Calendar className="w-5 h-5" />} label="Est. Date" value={companyDetails.estDate} />
                                <InfoItem icon={<ClipboardCheck className="w-5 h-5" />} label="Registration UEN" value={companyDetails.uen} />
                                <InfoItem icon={<User className="w-5 h-5" />} label="Director Name" value={companyDetails.directorName} />
                                <InfoItem icon={<Mail className="w-5 h-5" />} label="Director Email" value={companyDetails.directorEmail} />
                                <InfoItem icon={<MapPin className="w-5 h-5" />} label="Address" value={`${companyDetails.address}, ${companyDetails.city}, ${companyDetails.country}`} fullWidth />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mt-20 text-center text-slate-400 text-sm">
                &copy; 2024 Deep HR Match. All rights reserved.
            </footer>
        </div>
    );
};

const InfoItem = ({ icon, label, value, isLink = false, fullWidth = false }: { icon: any, label: string, value: string, isLink?: boolean, fullWidth?: boolean }) => (
    <div className={`flex flex-col space-y-1.5 ${fullWidth ? 'md:col-span-2' : ''}`}>
        <div className="flex items-center space-x-2 text-slate-400">
            {icon}
            <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
        </div>
        <div className="pl-7">
            {isLink ? (
                <a href={value} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium transition-colors">
                    {value}
                </a>
            ) : (
                <span className="text-slate-700 font-medium">{value}</span>
            )}
        </div>
    </div>
);

export default EmployerDashboard;
