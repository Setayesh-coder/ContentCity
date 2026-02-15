// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Users, Zap, Brain, Calendar, Star, Quote } from "lucide-react";

const weeks = [
  { week: "۱", title: "Content Thinking", desc: "تفکر سیستمی، تحلیل برند، فرضیه رشد" },
  { week: "۲", title: "Psychology + Story", desc: "روانشناسی توجه، معماری داستان" },
  { week: "۳", title: "Advanced Copywriting", desc: "Big Idea، CTA غیرمستقیم" },
  { week: "۴", title: "Video Strategy", desc: "اسکریپت ریلز، Pattern Interrupt" },
  { week: "۵", title: "Content System", desc: "Pillar/Cluster، تقویم KPI محور" },
  { week: "۶", title: "Data & Algorithm", desc: "Hook Rate، تست فرضیه" },
  { week: "۷", title: "Growth Content", desc: "Growth Loops، سری‌سازی" },
  { week: "۸", title: "AI in Content", desc: "Prompt Engineering، اتوماسیون" },
  { week: "۹", title: "پروژه واقعی", desc: "کار روی برند واقعی + دفاع" },
  { week: "۱۰", title: "Market Readiness", desc: "پورتفولیو، قرارداد، معرفی پروژه" },
];

const mentors = [
  { name: "Head of Content Strategy", role: "۱۰+ سال تجربه در برندهای بزرگ" },
  { name: "Senior Copywriter", role: "متخصص کپی‌رایتینگ وایرال" },
  { name: "Video & Growth Expert", role: "سازنده ریلزهای میلیونی" },
  { name: "Data & Analytics Mentor", role: "تحلیلگر الگوریتم اینستاگرام" },
];

const testimonials = [
  { name: "سارا احمدی", role: "Content Strategist", text: "این بوت‌کمپ مسیر شغلی منو کاملاً تغییر داد. حالا روی برندهای واقعی کار می‌کنم!" },
  { name: "محمد رضایی", role: "Growth Specialist", text: "فشار واقعی بازار رو اینجا تجربه کردم. بهترین سرمایه‌گذاری عمرم بود." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted py-24 md:py-40">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <Badge variant="secondary" className="mb-6 text-lg">ظرفیت محدود • شروع بعدی: به‌زودی</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              ما تولیدکننده پست تربیت نمی‌کنیم<br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ما معمار محتوا می‌سازیم
              </span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground md:text-2xl">
              بوت‌کمپ ۱۰ هفته‌ای حرفه‌ای با پروژه واقعی، منتورینگ پیشرفته و فیلتر سخت‌گیرانه
            </p>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-3 text-lg px-8">
                ثبت‌نام فوری <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                دانلود سیلابس کامل
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="container mx-auto px-4">
        <section className="container py-24">
          <h2 className="mb-16 text-center text-4xl font-bold">چرا هزاران نفر این بوت‌کمپ رو انتخاب کردن؟</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <Brain className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>آموزش عمیق و سیستمی</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> از روانشناسی تا AI</p>
                <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> چرخه کامل محتوا</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>تمرین واقعی با فشار بازار</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> تسک هفتگی + ریویو عمومی</p>
                <p className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> پروژه روی برند واقعی</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Users className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>منتورهای حرفه‌ای فعال</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {mentors.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-semibold">{m.name}</div>
                      <div className="text-sm text-muted-foreground">{m.role}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="container py-24 bg-muted/50">
          <h2 className="mb-16 text-center text-4xl font-bold">مسیر ۱۰ هفته‌ای تحول</h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {weeks.map((w, i) => (
                <Card key={i} className="relative text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {w.week}
                    </div>
                    <CardTitle className="text-lg">{w.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{w.desc}</p>
                  </CardContent>
                  {i < weeks.length - 1 && (
                    <ArrowLeft className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-muted-foreground lg:block" />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-24">
          <h2 className="mb-16 text-center text-4xl font-bold">نظرات شرکت‌کنندگان</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <CardContent className="pt-8">
                  <Quote className="mb-6 h-10 w-10 text-primary/20" />
                  <p className="text-lg italic mb-6">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted" />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(5)].map((_, s) => <Star key={s} className="h-5 w-5 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing + Final CTA */}
        <section className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold">همین حالا شروع کن</h2>
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-4xl">۹,۹۰۰,۰۰۰ تومان</CardTitle>
                <CardDescription className="text-xl">۱۰ هفته کامل + منتورینگ + پروژه واقعی + پورتفولیو</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-4">
                <Button size="lg" className="w-full text-lg gap-3">
                  ثبت‌نام و پرداخت امن <ArrowLeft className="h-6 w-6" />
                </Button>
                <p className="text-sm text-muted-foreground">ظرفیت محدود • گارانتی بازگشت وجه در هفته اول</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}