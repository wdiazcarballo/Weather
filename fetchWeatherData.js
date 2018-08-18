if (
    !process.env.WCD_APIKEY
)
{
    console.error("env for Weather Company Data not found");
    process.exit(1);
}
