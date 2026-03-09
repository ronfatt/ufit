import { referralMembers } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Table, TableRow } from "@/components/ui/table";

export function ReferralTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur">
      <div className="border-b border-slate-200/80 px-6 py-5">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Referral Members
        </div>
      </div>
      <div className="hidden grid-cols-[1.1fr_0.9fr_0.7fr_1.4fr_0.8fr] gap-4 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:grid">
        <div>Name</div>
        <div>Join Date</div>
        <div>Status</div>
        <div>Activity</div>
        <div>Est. Contribution</div>
      </div>
      <Table>
        {referralMembers.map((member) => (
          <TableRow
            key={member.name}
            className="grid gap-3 border-t border-slate-200/70 px-6 py-5 lg:grid-cols-[1.1fr_0.9fr_0.7fr_1.4fr_0.8fr] lg:items-center"
          >
            <div className="font-semibold text-slate-950">{member.name}</div>
            <div className="text-sm text-slate-500">{member.joinDate}</div>
            <div>
              <Badge className="tracking-normal normal-case">
                {member.status}
              </Badge>
            </div>
            <div className="text-sm leading-6 text-slate-600">{member.activity}</div>
            <div className="text-sm font-semibold text-slate-950">
              {member.contribution}
            </div>
          </TableRow>
        ))}
      </Table>
    </div>
  );
}
