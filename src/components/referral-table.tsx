import { referralMembers } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Table, TableRow } from "@/components/ui/table";

export function ReferralTable() {
  return (
    <div className="glass-card overflow-hidden rounded-[2rem]">
      <div className="border-b border-white/10 px-6 py-5">
        <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
          推荐成员列表
        </div>
      </div>
      <div className="hidden grid-cols-[1.1fr_0.9fr_0.7fr_1.4fr_0.8fr] gap-4 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 lg:grid">
        <div>姓名</div>
        <div>加入时间</div>
        <div>状态</div>
        <div>活跃动作</div>
        <div>预计贡献</div>
      </div>
      <Table>
        {referralMembers.map((member) => (
          <TableRow
            key={member.name}
            className="grid gap-3 border-t border-white/10 px-6 py-5 lg:grid-cols-[1.1fr_0.9fr_0.7fr_1.4fr_0.8fr] lg:items-center"
          >
            <div className="font-semibold text-white">{member.name}</div>
            <div className="text-sm text-white/55">{member.joinDate}</div>
            <div>
              <Badge className="border-[#00C2FF]/20 bg-[#00C2FF]/10 text-[#8ce7ff] tracking-normal normal-case">
                {member.status}
              </Badge>
            </div>
            <div className="text-sm leading-6 text-white/68">{member.activity}</div>
            <div className="text-sm font-semibold text-white">
              {member.contribution}
            </div>
          </TableRow>
        ))}
      </Table>
    </div>
  );
}
