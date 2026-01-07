function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h2>Système d’Archive Numérique</h2>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
