"use client";

import { Check, HandHeart, Heart, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const donationAmounts = [10, 25, 50, 100];

const paymentMethods = [
  {
    id: "bkash",
    name: "bKash",
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787923385/bks_konvfd.jpg",
  },
  {
    id: "nagad",
    name: "Nagad",
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787923731/nagad_ohi2r1.jpg",
  },
  {
    id: "sslcommerz",
    name: "SSLCommerz",
    image:
      "https://res.cloudinary.com/dpgjlcycl/image/upload/v1787923888/ssl_zhkrlc.png",
  },
];

export default function DonateSection() {
  const t = useTranslations("Donate.Donate");

  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount =
    selectedAmount !== null
      ? selectedAmount
      : Number(customAmount) > 0
        ? Number(customAmount)
        : 0;

  const handleDonate = () => {
    if (finalAmount <= 0 || !selectedPayment) {
      return;
    }

    console.log({
      amount: finalAmount,
      paymentMethod: selectedPayment,
    });
  };

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-4 py-1.5">
            <Heart className="mr-2 h-4 w-4" />

            {t("badge")}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>

          <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Donation Content */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Side - Donation Amount */}
          <Card className="h-fit border-border/60 bg-background shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <HandHeart className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {t("amount.title")}
                    </h2>

                    <p className="text-sm text-muted-foreground">
                      {t("amount.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={selectedAmount === amount ? "default" : "outline"}
                    onClick={() => handleAmountSelect(amount)}
                    className="h-14 text-base font-semibold"
                  >
                    {amount}
                  </Button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  {t("amount.custom")}
                </label>

                <div className="relative">
                  <Input
                    type="number"
                    min="1"
                    step="1"
                    placeholder={t("amount.placeholder")}
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="h-12 pl-8"
                  />
                </div>
              </div>

              {/* Selected Amount */}
              {finalAmount > 0 && (
                <div className="mt-6 rounded-xl border bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    {t("amount.selected")}
                  </p>

                  <p className="mt-1 text-3xl font-bold text-primary">
                    {finalAmount}
                  </p>
                </div>
              )}

              {/* Security */}
              <div className="mt-8 flex items-start gap-3 rounded-xl bg-muted/50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <p className="text-sm leading-6 text-muted-foreground">
                  {t("secureText")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Payment Methods */}
          <Card className="border-border/60 bg-background shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">{t("payment.title")}</h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t("payment.description")}
                </p>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                {paymentMethods.map((method) => {
                  const isSelected = selectedPayment === method.id;

                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPayment(method.id)}
                      className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50 hover:bg-muted/40"
                      }`}
                    >
                      {/* Payment Logo */}
                      <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-muted p-2">
                        <Image
                          src={method.image}
                          alt={method.name}
                          width={70}
                          height={40}
                          className="max-h-10 w-auto object-contain"
                        />
                      </div>

                      {/* Payment Name */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold">{method.name}</h3>
                      </div>

                      {/* Selected Icon */}
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {isSelected && <Check className="h-4 w-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Donate Button */}
              <Button
                type="button"
                onClick={handleDonate}
                disabled={finalAmount <= 0 || !selectedPayment}
                className="mt-8 h-12 w-full text-base font-semibold"
              >
                <Heart className="mr-2 h-5 w-5" />

                {finalAmount > 0
                  ? `${t("donateButton")} ${finalAmount}`
                  : t("donateButton")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
