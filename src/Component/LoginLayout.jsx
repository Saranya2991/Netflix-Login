export default function LoginLayout({ children }) {
  return (
    <div className="
      min-h-screen 
      w-full 
      bg-[url('/src/images/background.png')] 
      bg-cover 
      bg-center 
      bg-no-repeat
      bg-fixed
    ">
      <div className="min-h-screen w-full bg-black/20">
        {children}
      </div>
    </div>
  );
}


