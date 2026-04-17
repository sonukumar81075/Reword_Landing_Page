import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section id="get-started" className="bg-[#FEFEFF]  pt-4   md:pt-6  lg:pt-8">
      <div className="relative mx-auto max-w-full overflow-hidden bg-[#FEFEFF] px-4 py-8 text-center sm:px-6 md:px-12 md:py-10 lg:px-20 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tertiary-container/20 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-screen-2xl space-y-6 px-0 sm:space-y-8">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
            Start growing repeat customers today
          </h2>
          <p className="text-sm text-on-surface-variant md:text-lg">
            Join 200+ local legends building better relationships with their community.
          </p>
          <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
            <Button
              variant="primary"
              size="lg"
              type="button"
              className="mx-auto w-fit min-w-[220px] sm:mx-0 sm:w-auto sm:min-w-0"
            >
              Get Started for Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              type="button"
              className="mx-auto w-fit min-w-[220px] sm:mx-0 sm:w-auto sm:min-w-0"
            >
              Talk to Sales
            </Button>
          </div>
          <p className="text-xs text-on-surface-variant/70 md:text-sm">
            No credit card required - 14-day free trial on Pro plans
          </p>
        </div>
      </div>
    </section>
  );
}
  