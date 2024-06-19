export default function WidgetWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed bottom-5 right-3 flex flex-col items-center justify-between rounded-lg border border-white  border-opacity-70 bg-opacity-80 p-1 shadow-2xl backdrop-blur-[0.5rem] transition-all
      sm:bottom-[3rem] sm:right-[3rem]
      dark:border-slate-700 dark:bg-gray-950 dark:bg-transparent"
    >
      {children}
    </div>
  )
}
