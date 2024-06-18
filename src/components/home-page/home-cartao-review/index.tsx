import React from "react";
import { postCartaoRequest } from "@/services/cadastro/cartao/types";

interface HomeCartaoReviewProps {
  cartaoList: postCartaoRequest[];
}

export default function HomeCartaoReview({
  cartaoList,
}: HomeCartaoReviewProps) {}
