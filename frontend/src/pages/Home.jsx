import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, FileText, Upload, UserCircle } from "lucide-react"

const Button = ({ children, variant = "default", size = "md", asChild, to }) => {
    const baseStyles = "px-4 py-2 font-medium rounded-md";
    const sizeStyles = size === "sm" ? "text-sm" : size === "lg" ? "text-lg px-4 py-2" : "text-base";
    const variantStyles =
        variant === "outline"
            ? "border border-primary text-primary bg-transparent hover:bg-gray-200 flex items-center gap-1"
            : "bg-black text-white hover:bg-primary-dark";

    return asChild ? (
        <Link to={to} className={`${baseStyles} ${sizeStyles} ${variantStyles}`}>
            {children}
        </Link>
    ) : (
        <button className={`${baseStyles} ${sizeStyles} ${variantStyles}`}>{children}</button>
    );
};

const Card = ({ children, className }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
            {children}
        </div>
    );
};

const CardHeader = ({ children, className }) => {
    return <div className={`mb-4 ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
    return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

const CardDescription = ({ children, className }) => {
    return <p className={`text-gray-600 ${className}`}>{children}</p>;
};

const CardContent = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <div>
                <header className="sticky top-0 px-5 z-50 w-full border-b bg-white/90 backdrop-blur-md">
                    <div className="container flex h-16 items-center justify-between">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-800">ArthroScan</span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex gap-6">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "/about" },
                                { label: "How It Works", href: "#" },
                                { label: "Contact", href: "/contact" },
                            ].map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="font-medium text-gray-700 hover:text-primary transition-colors hover:text-blue-600"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="#">Log in</Link>
                            </Button>
                            <Button size="sm" asChild>
                                <Link href="#">Sign up</Link>
                            </Button>
                        </div>
                    </div>
                </header>

            </div>
            
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Advanced Knee Arthritis Classification
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground text-gray-600 md:text-xl">
                                        Upload your knee X-ray imgs and get instant analysis of arthritis severity using our advanced deep
                                        learning model.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" asChild>
                                        <Link href="#">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="#">Learn More</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto lg:mr-0 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-3xl opacity-50" />
                                <img
                                    src="/placeholder.svg?height=550&width=450"
                                    alt="Knee X-ray visualization"
                                    width={450}
                                    height={550}
                                    className="relative rounded-lg border shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900">How It Works</h2>
                        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our AI model classifies arthritis severity in three simple steps.
                        </p>
                        <div className="mt-12 grid gap-10 sm:grid-cols-3">
                            {[
                                {
                                    icon: Upload,
                                    title: "Upload X-ray",
                                    desc: "Securely upload your knee X-rays for AI-driven analysis.",
                                },
                                {
                                    icon: FileText,
                                    title: "AI Analysis",
                                    desc: "Our deep learning model evaluates arthritis severity instantly.",
                                },
                                {
                                    icon: BarChart3,
                                    title: "Track Progress",
                                    desc: "Monitor your condition with detailed reports and insights.",
                                },
                            ].map(({ icon: Icon, title, desc }) => (
                                <Card
                                    key={title}
                                    className="flex flex-col items-center text-center p-8 shadow-lg rounded-xl bg-gray-50 transition-transform transform hover:scale-105"
                                >
                                    <div className="p-4 rounded-full bg-blue-100">
                                        <Icon className="h-10 w-10 text-blue-600" />
                                    </div>
                                    <h3 className="mt-5 text-2xl font-semibold text-gray-800">{title}</h3>
                                    <p className="mt-2 text-gray-600 text-base">{desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Personal Health Records
                                    </h2>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Keep track of your knee health journey with our comprehensive personal record system.
                                    </p>
                                </div>
                                <ul className="grid gap-3">
                                    <li className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                            <UserCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <span>Secure personal profile with medical history</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                            <BarChart3 className="h-4 w-4 text-primary" />
                                        </div>
                                        <span>Detailed progression charts and analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                            <FileText className="h-4 w-4 text-primary" />
                                        </div>
                                        <span>Downloadable reports for healthcare providers</span>
                                    </li>
                                </ul>
                                <div>
                                    <Button size="lg" asChild>
                                        <Link href="#">Create Your Profile</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto lg:ml-0">
                                <Card className="w-full max-w-md mx-auto">
                                    <CardHeader>
                                        <CardTitle>Patient Dashboard</CardTitle>
                                        <CardDescription>Track your arthritis progression over time</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium">Severity Score</span>
                                                    <span className="text-sm font-medium">Grade 2</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-muted">
                                                    <div className="h-full w-1/2 rounded-full bg-primary"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium">Joint Space</span>
                                                    <span className="text-sm font-medium">3.2mm</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-muted">
                                                    <div className="h-full w-3/4 rounded-full bg-primary"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium">Bone Density</span>
                                                    <span className="text-sm font-medium">Normal</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-muted">
                                                    <div className="h-full w-4/5 rounded-full bg-primary"></div>
                                                </div>
                                            </div>
                                            <img
                                                src="/placeholder.svg?height=200&width=350"
                                                alt="Progress chart"
                                                width={350}
                                                height={200}
                                                className="rounded-md border mt-4"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Monitor Your Knee Health?
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of patients who are taking control of their arthritis management.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" asChild>
                                    <Link href="#">
                                        Get Started Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#">Contact Our Team</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t py-6 md:py-0 px-4 text-gray-800">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                    <p className="text-sm text-muted-foreground">© 2024 ArthroScan. All rights reserved.</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                        <Link href="#" className="hover:underline">
                            Terms
                        </Link>
                        <Link href="#" className="hover:underline">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:underline">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}