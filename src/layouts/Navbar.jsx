const navLink = [
    {href: '#about', lable: 'About'},
    {href: '#skill', lable: 'Skill'},
    {href: '#projects', lable: 'Projects'},
    {href: '#experience', lable: 'Experience'}

]

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 bg-transparent py-5  z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    UA<span className="text-primary"></span>
                </a>

                {/* Desktop mode */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLink.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-forground hover:tect-forground rounded-full hover:bg-surface">
                                {link.lable}
                            </a>
                        ))}
                            
                    </div>
                </div>
            </nav>
        </header>
    );
    
};