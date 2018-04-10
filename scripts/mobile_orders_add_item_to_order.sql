declare @SrcPosID INT, @PriceCC_wt INT, @UM VARCHAR(40)


select @SrcPosID=ISNULL(MAX(SrcPosID),0)+1 from t_IORecD
WHERE ChID = @ChID
-- UNION ALL
select @PriceCC_wt=mp.PriceMC,@UM=p.UM
from r_Prods  p
inner join r_ProdMP mp on mp.ProdID=p.ProdID
WHERE p.ProdID = @ProdID

INSERT into t_IORecD (ChID, SrcPosID ,ProdID, UM, Qty,
                     PriceCC_nt, SumCC_nt, Tax, TaxSum, PriceCC_wt,
                     SumCC_wt, NewQty,NewSumCC_nt, NewTaxSum, NewSumCC_wt,
                     RemQty, BarCode, SecID, ForeCastQty)
VALUES (@ChID, @SrcPosID ,@ProdID, @UM, @Qty,
        0, 0, 0, 0, @PriceCC_wt,
        @PriceCC_wt*@Qty, 0,0, 0, 0,
        0, 0, 0, 0) ;
